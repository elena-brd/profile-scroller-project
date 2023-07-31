const people = [
    {
        imageURL: 'https://randomuser.me/api/portraits/women/4.jpg',
        name: 'Emma Mackey',
        age: 27,
        location: 'Paris, France',
        lookingFor: 'Female looking for male'
    },
    {
        imageURL: 'https://randomuser.me/api/portraits/men/1.jpg',
        name: 'John Smith',
        age: 32,
        location: 'Los Angeles, CA',
        lookingFor: 'Male looking for female'
    },
    {
        imageURL: 'https://randomuser.me/api/portraits/women/2.jpg',
        name: 'Rachel Green',
        age: 35,
        location: 'Chicako, IL',
        lookingFor: 'Female looking for male'
    },
    {
        imageURL: 'https://randomuser.me/api/portraits/men/2.jpg',
        name: 'Arthur Morgan',
        age: 28,
        location: 'New York, NY',
        lookingFor: 'Male looking for female'
    },
    {
        imageURL: 'https://randomuser.me/api/portraits/men/3.jpg',
        name: 'Peter Potter',
        age: 32,
        location: 'London, UK',
        lookingFor: 'Male looking for female'
    },
    {
        imageURL: 'https://randomuser.me/api/portraits/women/3.jpg',
        name: 'Sara Green',
        age: 30,
        location: 'Berlin, Germany',
        lookingFor: 'Female looking for male'
    },
];

// generator
function* createPeopleIterator() {
    let index = 0;
    while (true) {
        yield people[index++ % people.length]
    }
}
const iterator = createPeopleIterator()


const container = document.querySelector('.container');
const userInfo = document.querySelector('.user-info');
const nextBtn = document.getElementById('btn-next');
const age = document.getElementById('age');
const userName = document.getElementById('user-name');
const locations = document.getElementById('location');
const lookingInfo = document.getElementById('looking-info');
const img = document.querySelector('img');


nextBtn.addEventListener('click', () => {
    const people = iterator.next().value;
    img.src = people.imageURL;
    userName.textContent = people.name;
    age.textContent = `Age: ${people.age} years old`;
    locations.textContent = `From: ${people.location}`
    lookingInfo.textContent = people.lookingFor;
})