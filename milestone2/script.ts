const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    //collect  input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
    const experiance = (document.getElementById('experiance') as HTMLInputElement).value

    // generate resume content dynamically
    const resumeHTML = `
    <h2>Resume</h2>
    <hr>
    <h3>Personal Information</h3>
    <hr>
    <h2>${name}</h2>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
    <h3>Experiance</h3>
    <p>${experiance}</p>
    `
    // display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML

    } else {
        console.error('resumeDisplayElement not found')
    }

})