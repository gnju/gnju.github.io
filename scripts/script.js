const menu = document.getElementById('eng');

menu.addEventListener('mouseover', () => {
                                           const toSelected = document.getElementById('eng').classList.add('selected-menu-item');
                                         });

menu.addEventListener('mouseout', () => {
                                         const unSelected = document.getElementById('eng').classList.remove('selected-menu-item');
                                        }); 
