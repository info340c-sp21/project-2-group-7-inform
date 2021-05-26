export function toggleElementInArray(element, array) {
    let newArray;
    if (array.includes(element)) {
        // The element is selected; unselect it
        newArray = array.filter(elt => elt !== element);
    } else {
        // The element is unselected; select it
        newArray = [...array, element];
    }
    return newArray;
}