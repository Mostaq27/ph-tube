const dataLoader = async ()=>{
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories")
    const data = await response.json()
    const categories = data.data;

    const cardContainer = document.getElementById("card-container");
    categories.forEach(category=>{
        const div = document.createElement("div")
        div.innerHTML=`
        <button class="btn inline-block rounded-lg ">${category.category}</butto>
        `
        cardContainer.appendChild(div);
    })
}

dataLoader();