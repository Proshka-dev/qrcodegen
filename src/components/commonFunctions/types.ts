interface IGetDataProps {
    operationType: 'scan' | 'gen';
}

interface ISaveOperationProps {
    text: string;
    date: Date;
}

interface ISaveDataProps extends IGetDataProps, ISaveOperationProps {
}

export type { ISaveDataProps, IGetDataProps, ISaveOperationProps }