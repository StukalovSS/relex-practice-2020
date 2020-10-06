export default interface IComponent {
    build(): void;
    setViewParams(param: any): void;
    destroy(): void;
}