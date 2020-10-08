export default interface Component {
    build(): void;
    setViewParams(param: any): void;
}