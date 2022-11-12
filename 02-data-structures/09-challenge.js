const arr1 = [
      {
        id: 1,
        title: 'Avatar',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti',
      },
      {
        id: 2,
        title: 'Batman',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti',
      },
      {
        id: 3,
        title: 'Uncharted',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti',
      },
      {
        id: 4,
        title: 'The Godfather',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti',
      },
      {
        id: 5,
        title: 'Aquaman',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti',
      },
]

const arr2 = [1, 3, 4]

function organizeMovieReviews(arr1,arr2) {
  let myReviews = []
  let otherReviews = []
      for (i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i].id)) {
          myReviews.push(arr1[i])
        } else {
          otherReviews.push(arr1[i])      
        }
      }
      console.log(myReviews, otherReviews)
}

organizeMovieReviews(arr1, arr2)