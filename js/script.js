//Ini javascript

console.log ("Javascript berhasil tersambung");

let indexSlide = 0;

nextSlide();

// Fungsi untuk memvalidasi
function validateForm () {
    const usernameInput = document.getElementById("username-input").value;
    

    
// Validasi jika nama tidak kosong
    if (usernameInput == "") {
       document.getElementById("username-error").style.display = "block";
    } else {
               document.getElementById("username-error").style.display = "none";
        // document.getElementById("username-result").innerHTML = usernameInput;
    }
    const emailInput = document.getElementById("email-input").value;
    
    // Validasi jika nama tidak kosong
        if (emailInput == "") {
           document.getElementById("email-error").style.display = "block";
        } else {
                       document.getElementById("email-error").style.display = "none";
            // document.getElementById("username-result").innerHTML = emailInput;
        }
        const hobby = document.getElementById("hobby-input").value;
    
        // Validasi jika nama tidak kosong
            if (hobby == "") {
               document.getElementById("hobby-error").style.display = "block";
            } else {
                               document.getElementById("hobby-error").style.display = "none";
                // document.getElementById("hobby-result").innerHTML = hobby;
            }
            
    if (usernameInput != "" && emailInput != "" && hobby != "") {
        alert("Data Berhasil Tersimpan");
        document.getElementById("formInput").reset();
    } 

    console.log ("validateForm executed");
}

document.getElementById("formInput").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
})


function nextSlide() {
    showBanner(indexSlide += 1)
}

function showBanner(n) {
    const imageList = document.getElementsByClassName("banner-img");
    console.log(imageList);
    console.log(imageList.length);
    console.log(n);
    if (n > imageList.length - 1) indexSlide = 0;

    // hide semua banner 
    for (let i = 0; i < imageList.length; i++) {
        imageList[i].style.display ="none";
    }
    // show 1 banner
    imageList[indexSlide].style.display ="block";
}

// Automate banner slide
setInterval(nextSlide, 3000);