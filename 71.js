var suggestedProducts = function(products, searchWord) {
    products.sort(); // Sort products lexicographically
    let result = [];
    let prefix = "";

    for (let char of searchWord) {
        prefix += char;
        // Filter products starting with the current prefix
        let suggestions = products.filter(product => product.startsWith(prefix));
        // Add up to 3 suggestions to the result
        result.push(suggestions.slice(0, 3));
    }

    return result;
};
console.log(suggestedProducts(["havana"], searchWord = "havana"));