interface TipValueType {
    billAmount: number;
    numPeople: number;
    tip: number;
}

export interface InputComponentProps {
    label: string;
    children: React.ReactNode;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage: string;
    onBlur: () => void;
    value: number | string;
}

export interface CalculatorProps {
    tipValues: TipValueType;
    onSetBill: (billValue: number) => void;
    onSetNumPeople: (peopleValue: number) => void;
    onSetTip: (tipValue: number) => void;
}

export interface ResultsProps {
    tipValues: TipValueType;
    onReset: () => void;
}