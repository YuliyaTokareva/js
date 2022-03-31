export const manageClasses = () => {
  const addClass = document.querySelector('.one');
  addClass.classList.add('selected');
  const deleteClass = document.querySelector('.two');
  deleteClass.classList.remove('selected');
  const toggleClass = document.querySelector('.three');
  toggleClass.classList.toggle('three_done');
  const addFourClass = document.querySelector('.four.some-class');
  addFourClass.classList.add('another-class');
};
manageClasses();
