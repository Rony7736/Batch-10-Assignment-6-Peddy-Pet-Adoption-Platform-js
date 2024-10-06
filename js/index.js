
// fetch load category button

//step 1
// create load categories 

const loadCategories = async() => {

    // fetch the data 
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/categories');
    const data = await res.json();
    displayCategories(data.categories);
}

// step 2

// const obj = {
//     "id": 1,
//     "category": "Cat",
//     "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
// }

// create display categories

const displayCategories = (categories) => {
    const categoryButtons = document.getElementById('categoryButtons')

    categories.forEach ((item) => {
        // create a button

        const button = document.createElement('button')
        button.classList = "btn px-32 h-16 lg:h-24 text-2xl font-bold"
        button.innerText = item.category

        // add button to category
        categoryButtons.append(button)

    })

}


// step 3
const loadAllPets = async() => {

    // fetch the data 
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await res.json();
    displayAllPets(data.pets);
}


// step 4

// const obj = {
//     "petId": 1,
//     "breed": "Golden Retriever",
//     "category": "Dog",
//     "date_of_birth": "2023-01-15",
//     "price": 1200,
//     "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//     "gender": "Male",
//     "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//     "vaccinated_status": "Fully",
//     "pet_name": "Sunny"
// }


const displayAllPets = (allPets) => {

    const petContainer = document.getElementById('grid-Card-1')

    allPets.forEach ((pet) => {
       
        console.log(pet);

        const card = document.createElement('div')
        card.classList = "card border shadow-xl"
        card.innerHTML = `

            <figure class="px-8 pt-8">
                <img src="${pet.image}" alt="pets" class="rounded-xl"/>
            </figure>
            <div class="card-body">
                <h2 class="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="flex gap-3 border-t">
                    <div class="card-actions ">
                        <button class="btn btn-primary mt-3">Buy Now</button>
                    </div>

                    <div class="card-actions ">
                        <button class="btn btn-primary mt-3">Buy Now</button>
                    </div>

                    <div class="card-actions ">
                        <button class="btn btn-primary mt-3">Buy Now</button>
                    </div>

                </div>
            </div>

        `

        petContainer.append(card)
        
        

    })
    
}


loadCategories ()

loadAllPets()




