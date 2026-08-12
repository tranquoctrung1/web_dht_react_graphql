interface ConfigChannelInterface {
    index: number;
    LoggerId: string;
    onDelete?: (index: number) => void;
}

export default ConfigChannelInterface;
