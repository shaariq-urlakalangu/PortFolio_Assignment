async function fetchApi(){
            try{
                const pokeName=document.getElementById("pokemonName").value.toLowerCase();
                const output=document.getElementById("outputImage");
                const errorOutput=document.getElementById("errorDisplay");
                const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
                console.log(response);
                if(!response.ok){
                    // throw new Error("Could not fetch resourse");
                    errorOutput.innerText="Pokemon not found";
                    errorOutput.style.display="block";
                    output.style.display="none";
                }
                else{
                    const api= await response.json();
                    console.log(api);
                    const image=api.sprites.front_default;
                    output.src=image;
                    errorOutput.style.display="none";
                    output.style.display="block";
                }
            }
            catch(error){
                console.error(error);
                
            }
        }