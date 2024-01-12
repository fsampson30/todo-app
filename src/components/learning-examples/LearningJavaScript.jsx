const person = {
    name: 'Flavio',
    adress: {
        line1: 'A Street',
        city: 'Rio de Janeiro',
        country: 'BR'
    },
    profiles: ['twitter','linkedin','instagram'],
    printProfile: () => {
        console.log(person.profiles[0])
    }
}



export default function LearningJavaScript(){
    return (
        <>
            <div>{person.name}</div>
            <div>{person.adress.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile}</div>
        </>
    )
}