import { getSizes, setSize } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

// const foundMetal = metals.find(
//     (metal) => {
//         return metal.id === order.metalId
//     }
// )
// const foundSizes = sizes.find(
//     (size) => {
//         return size.id === order.sizeId
//     }
// )
// const foundStyle = styles.find(
//     (style) => {
//         return style.id === order.metalId
//     }
// )



// const totalCost = foundMetal.price + foundStyle.price + foundSizes.price


// const costString = totalCost.toLocaleString("en-US", {
//     style: "currency",
//     currency: "USD"
// })

//     `<li>
//     Order #${order.id} cost ${costString}
// </li>`