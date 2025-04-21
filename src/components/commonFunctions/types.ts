type TSaveDataProps = {
    operationType: 'scan' | 'gen';
    text: string;
    date: Date;
}

type TGetDataProps = {
    operationType: 'scan' | 'gen';
}

type TSaveOperationProps = {
    text: string;
    date: Date;
}

export type { TSaveDataProps, TGetDataProps, TSaveOperationProps }