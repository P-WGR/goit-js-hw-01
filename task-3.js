function getElementWidth(content, padding, border) {
    // Usunięcie "px" i zamiana na liczby
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);

    // Obliczenie całkowitej szerokości zgodnie z wartością box-sizing: border-box
    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

    // Zaokrąglenie do najbliższej liczby całkowitej i zwrócenie wyniku
    return Math.round(totalWidth);
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200