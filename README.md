# 🔁 Symmetric Difference Function

A simple and clean JavaScript function for computing the **symmetric difference** between two arrays.  
That means it returns all elements that appear in **either** array, but **not in both**.  
Perfect for learning array methods, practicing functional programming, or handling small data-processing tasks.

---

## 🧪 User Stories (Requirements)
1. ✔️ The function `diffArray` returns an array
2. ✔️ The function takes two arguments, both arrays
3. ✔️ The function uses `filter`
4. ✔️ The function returns the symmetric difference
5. ✔️ Returns empty array when the arrays have no difference

## ✨ Features

- 🧮 Computes the **symmetric difference** of two arrays  
- 📦 Returns a **new array** without modifying the originals  
- 🔍 Uses JavaScript's powerful `filter` and `includes` methods  
- 🧪 Works with strings, numbers, or any primitive values  
- 🚫 Returns an **empty array** when no differences exist  
- 🧘 Clean, readable ES6+ arrow function style

---

## 📘 Example

**Array A:**  
```js
["diamond", "stick", "apple"]
```

**Array B:**
```js 
["stick", "emerald", "bread"]
```
**Result**
```js
["diamond", "apple", "emerald", "bread"]
```

## 🧠 How It Works
The function compares two arrays:

1. `symDiffA` keeps all items found in A but not in B

2. `symDiffB` keeps all items found in B but not in A

3. Both results are combined into a final symmetric difference


## 🚀 Usage
Just import or paste the function into your `javaScript` file

```js
console.log(diffArray(["a", "b", "c"], ["b", "d"]));
```

## 📄 License
This project is licensed under the MIT License.

## 🙌 Contributing
Pull requests are welcome! If you have improvements or want to expand this into a full utility library, feel free to fork the repo.

## 💬 Feedback
If you have suggestions, ideas, or questions — open an issue!
Happy coding! 😄