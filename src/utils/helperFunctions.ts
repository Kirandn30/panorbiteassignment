import { UserType } from "../redux/usersSlice";

export function findNextTwoObjects(array: UserType[], id:number) {
    const index = array.findIndex(obj => obj.id === id);

    if (index === -1) {
        return []; // Object not found
    }

    const nextIndex = (index + 1) % array.length;
    const secondNextIndex = (index + 2) % array.length;

    return [array[nextIndex], array[secondNextIndex]];
}