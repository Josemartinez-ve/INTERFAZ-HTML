// Login page functionality
let isLogin = true

// DOM elements
const toggleFormBtn = document.getElementById("toggleFormBtn")
const formTitle = document.getElementById("formTitle")
const formDescription = document.getElementById("formDescription")
const toggleQuestion = document.getElementById("toggleQuestion")
const submitBtn = document.getElementById("submitBtn")
const confirmPasswordGroup = document.getElementById("confirmPasswordGroup")
const authForm = document.getElementById("authForm")
const confirmPasswordInput = document.getElementById("confirmPassword")

// Toggle between login and signup
function toggleForm() {
  isLogin = !isLogin

   

  authForm.reset()
}

function handleSubmit(e) {
  e.preventDefault()


  alert(isLogin ? "¡Inicio de sesión exitoso!" : "¡Cuenta creada exitosamente!")

}

document.addEventListener("DOMContentLoaded", () => {
  if (toggleFormBtn) {
    toggleFormBtn.addEventListener("click", toggleForm)
  }

  if (authForm) {
    authForm.addEventListener("submit", handleSubmit)
  }
  const socialButtons = document.querySelectorAll(".social-button")
  socialButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const providers = ["Google", "Apple", "Facebook"]
      console.log(`Social login clicked: ${providers[index]}`)
      alert(`Inicio de sesión con ${providers[index]} estará disponible pronto.`)
    })
  })
})
