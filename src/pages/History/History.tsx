import s from './history.module.css'
import { formatDate, getDataFromLocalStorage } from '../../components/commonFunctions/commonFunctions'
import { TSaveOperationProps, TSaveDataProps } from '../../components/commonFunctions/types';
import { useState } from 'react';

type TSortType = 'date' | 'text' | 'type';

type TRenderTableParams = {
    operationsData: TSaveDataProps[],
    showGen: boolean,
    showScan: boolean,
    sortBy: TSortType,
    searchString?: string,
}


function renderTable(params: TRenderTableParams) {
    // фильтр по типу
    let table = params.operationsData.filter((item) => {
        if (item.operationType === 'gen') { return params.showGen };
        if (item.operationType === 'scan') { return params.showScan };
    });

    // сортировка
    table.sort((a, b) => {
        if (params.sortBy === 'date') { return a.date > b.date ? 1 : -1; };
        if (params.sortBy === 'text') { return ((a.text.toLowerCase()).localeCompare(b.text.toLowerCase())) };
        if (params.sortBy === 'type') { return a.operationType > b.operationType ? 1 : -1; };
        return 1; // почему ругается при отсутствии этой строчки?
    });

    return (
        <div className={s.history__table}>
            {table.map((data: TSaveDataProps) => (
                <div className={s.history__tableline} key={data.date.getTime()}>
                    {formatDate(data.date)}
                    <span> </span>
                    {data.operationType}
                    <span> </span>
                    {data.text}
                </div>
            ))}
        </div>
    )
}


const History = () => {
    // хуки
    const [showScan, setShowScan] = useState(true);
    const [showGen, setShowGen] = useState(true);
    const [sortBy, setSortBy] = useState<TSortType>('date');
    const [searchInputValue, setSearchInputValue] = useState('');
    const [searchString, setSearchString] = useState('');
    const [changeSearhStringDelayed, setChangeSearhStringDelayed] = useState(false);


    // Получение данных из локального хранилища
    const scanData = getDataFromLocalStorage({ operationType: 'scan' });
    const genData = getDataFromLocalStorage({ operationType: 'gen' });

    // Объединение данных в один массив operationsData
    const operationsScanData = scanData.map((item: TSaveOperationProps): TSaveDataProps => ({ operationType: 'scan', ...item }));
    const operationsGenData = genData.map((item: TSaveOperationProps): TSaveDataProps => ({ operationType: 'gen', ...item }));
    const operationsData: TSaveDataProps[] = [...operationsScanData, ...operationsGenData];

    // Обработчики элементов управления
    function onChangeScanHandler() {
        setShowScan((value) => (!value));
    }

    function onChangeGenHandler() {
        setShowGen((value) => (!value));
    }

    function onChangeSortHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        switch (event.target.value) {
            case 'text':
                setSortBy('text');
                break;
            case 'date':
                setSortBy('date');
                break;
            case 'type':
                setSortBy('type');
                break;
        }
    }

    // обработчик изменения input-а с поиском
    //let changeSearhStringDelayed = false; ПОЧЕМУ НЕ СРАБОТАЛО??????????
    function onChangeSearchInputHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setSearchInputValue(event.target.value);
        const delayTime = 4000; //задержка обновления поиска
        //console.log(new Date(), changeSearhStringDelayed);
        // обновление с задержкой
        if (!changeSearhStringDelayed) {
            // Если не задержано, то запланировать обновление
            setChangeSearhStringDelayed(true);
            setTimeout(() => {
                setChangeSearhStringDelayed(false);
                setSearchString(event.target.value);
                console.log('delayed setSearchString', event.target.value);
            }, delayTime);
        }
    }

    return (
        <div className={s.history}>
            <div className="container">
                <div className={s.history__settingspanel}>
                    <div className={s.history__scan}>
                        <input type="checkbox" name='showscan' checked={showScan} onChange={onChangeScanHandler} />
                        <label htmlFor="showscan">Сканирование</label>
                    </div>
                    <div className={s.history__gen}>
                        <input type="checkbox" name='showgen' checked={showGen} onChange={onChangeGenHandler} />
                        <label htmlFor="showgen">Генерирование</label>
                    </div>
                    <div className={s.history__search}>
                        <label htmlFor="search">Поиск</label>
                        <input type="text" name='search' placeholder='Строка для поиска' onChange={onChangeSearchInputHandler} value={searchInputValue} />
                    </div>
                    <div className={s.history__sort}>
                        <label htmlFor="sort-select">Сортировка</label>
                        <select name="sort" id="sort-select" onChange={onChangeSortHandler}>
                            <option value="date">дата</option>
                            <option value="text">текст</option>
                            <option value="type">тип</option>
                        </select>
                    </div>
                </div>

                <div className={s.history__tabletitle}>
                    История действий
                </div>
                {renderTable({ operationsData, showGen, showScan, sortBy })}
            </div>

        </div>
    )
}

export default History
