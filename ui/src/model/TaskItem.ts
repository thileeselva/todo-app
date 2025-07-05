export default interface TaskItem {
    id: number;
    title: string;
    isDone: boolean;
    description?: string;
}