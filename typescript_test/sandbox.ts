function createMessage(text: string, parentElement: HTMLElement, callback?: () => void) {
  const messageContainer = document.createElement('div');
  messageContainer.style.marginLeft = '300px';
  messageContainer.style.marginTop = '100px';
  messageContainer.style.textAlign = 'center';
  messageContainer.style.color="white"; // Centrer le contenu

  const messageElement = document.createElement('div');
  messageElement.innerHTML = `${text}`;
  messageElement.style.fontFamily = 'Comic Sans MS", cursive';
  messageElement.style.fontSize = '50px';

  const buttonElement = document.createElement('button');
  buttonElement.textContent = 'Suivant';
  buttonElement.style.backgroundColor = 'green';
  buttonElement.style.color = 'white';
  buttonElement.style.padding = '10px 20px';
  buttonElement.style.border = 'none';
  buttonElement.style.borderRadius = '5px';
  buttonElement.style.marginTop = '20px';
  buttonElement.style.cursor = 'pointer';

  messageContainer.appendChild(messageElement);
  messageContainer.appendChild(document.createElement('br')); // Ajoute un saut de ligne
  messageContainer.appendChild(buttonElement);

  buttonElement.addEventListener('click', () => {
      messageContainer.style.display = 'none';
      if (callback) {
          callback();
      }
  });

  parentElement.appendChild(messageContainer);
}

function AfficherFutur2() {
  const parentElement = document.getElementById('futur');
  if (parentElement) {
      createMessage('Pensez à un nombre entier', parentElement, () => {
          createMessage('Multipliez ce nombre par quatre (x4)', parentElement, () => {
              createMessage('Soustrayez 10 de ce nombre (-10)', parentElement, () => {
                  createMessage('Ajoutez 8 à ce nombre (+8)', parentElement, () => {
                      createMessage('Divisez ce nombre par 2 (/2)', parentElement, () => {
                          createMessage('Soustrayez 2 fois le nombre initial (-2initial)', parentElement, () => {
                              createMessage('Ajoutez 6 à ce nombre (+6)', parentElement, () => {
                                  createMessage('Soustrayez à ce nombre 4 (-4)', parentElement, () => {
                                      createMessage('Mulipliez  ce nombre par 5 (x5)', parentElement, () => {
                                          afficherResultatFutur(parentElement);
                                      });
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
  }
}

function afficherResultatFutur(parentElement: HTMLElement) {
  const messageContainer = document.createElement('div');
  messageContainer.style.marginLeft = '300px';
  messageContainer.style.marginTop = '100px';
  messageContainer.style.textAlign = 'center'; // Centrer le contenu

  const messageElement = document.createElement('div');
  messageElement.id = 'message';
  messageElement.innerHTML = `Votre nombre est 5 😁`;
  messageElement.style.fontFamily = 'Comic Sans MS", cursive';
  messageElement.style.fontSize = '50px';

  const reessayerButton = document.createElement('button');
  reessayerButton.id = 'recommencerButton';
  reessayerButton.innerHTML = 'Recommencer';
  reessayerButton.style.backgroundColor = 'green';
  reessayerButton.style.color = 'white';
  reessayerButton.style.padding = '10px 20px';
  reessayerButton.style.border = 'none';
  reessayerButton.style.borderRadius = '5px';
  reessayerButton.style.marginTop = '20px';
  reessayerButton.style.cursor = 'pointer';

  messageContainer.appendChild(messageElement);
  messageContainer.appendChild(document.createElement('br')); // Ajoute un saut de ligne
  messageContainer.appendChild(reessayerButton);

  reessayerButton.addEventListener('click', () => {
      reessayerButton.style.display = 'none';
      parentElement.removeChild(messageContainer);
      AfficherFutur2();
  });

  parentElement.appendChild(messageContainer);
}

// Appel de la fonction AfficherFutur2 après que le fichier sandbox.js a été chargé
AfficherFutur2();
