//pure function : immutablity

//impure function 
function updateProfile_(profile, city) {
    //update
    profile.city = city
    return profile;
}
//pure 
function updateProfile__(profile, city) {
    //return new object by coping old object properties.
    return {
        id: profile.id,
        name: profile.name,
        city: city
    }
}
function updateProfile___(profile, city) {
    //return new object by coping old object properties.
    return Object.assign({}, profile, { city: city })
}
function updateProfile(profile, city) {
    //return new object by coping old object properties.
    return { ...profile, city }
}

let profile = {
    id: 1,
    name: 'Subramanian',
    city: 'Chennai'
}
console.log('Before Update', profile)
let updatedProfile = updateProfile(profile, 'Coimbatore')
console.log('After update', updatedProfile)

console.log(profile === updatedProfile ? "Same Object " : " Different Object")