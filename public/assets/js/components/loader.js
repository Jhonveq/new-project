function loader () {
    window.addEventListener('load', function () {
      const loader = document.querySelector('.loading-wave')
      loader.classList.add('loader--hidden')
    })
  }
  
  export default loader