import { colors } from "./colors";

const cards = [
    /* Model default*/
    /* {
        id: 0,
        title: "Title",
        description: "The description about this card must content 50 caracters",
        imageUrl: "https://github.com/AkoruuDev/systemrin/blob/main/src/assets/default-image.jpg?raw=true",
        type: 'System', //'System' or 'Universe
        type_box: {
            name: 'Card theme',
            color: colors.orange
        }
    }, */
    /* ------------------------------ */
    {
        id: 1,
        title: "Level progression",
        description: "Accumulate XP Level (XN) to advance in level in Rinhuix. When you level up, transform XN into Cash XP (XC) to improve your record. XC is essential for attributes and powers. Spend wisely, as XC can only be used when leveling up.",
        imageUrl:"https://images.playground.com/f7edf01022884fb18d9c1f953a30f899.jpeg",
        type: 'System',
        type_box: {
            name: 'Game machanics',
            color: colors.orange
        }
    },
];

export {
    cards,
}