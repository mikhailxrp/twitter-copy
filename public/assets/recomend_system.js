function getHashtagsProfiles(profiles) {
  for (let userProfile of profiles) {
    const hashtagArr = [];
    for (let post of userProfile.posts) {
      let hashtagStr = post.split(' ');
      hashtagStr.forEach((hashtag) => {
        if (hashtag[0] === '#') {
          hashtagArr.push(hashtag);
        }
      });
    }
    userProfile.posts = hashtagArr;
  }
  return profiles;
}

function getHashtagProfile(profile) {
  let hashtagArr = [];
  for (let word of profile.posts) {
    let hashtagStr = word.split(' ');
    hashtagStr.forEach((hashtag) => {
      if (hashtag[0] === '#') {
        hashtagArr.push(hashtag);
      }
    });
    profile.posts = hashtagArr;
  }
  return profile;
}

export default function recommendRead(profile, profiles, count) {
  const recommendations = [];
  profile = getHashtagProfile(profile);
  profiles = getHashtagsProfiles(profiles);

  for (let user of profiles) {
    const commonHashtag = profile.posts.filter((hashtag) => user.posts.includes(hashtag));

    recommendations.push({
      id: user.id,
      countHashtag: commonHashtag.length,
    });
  }

  recommendations.sort((arr1, arr2) => arr2.countHashtag - arr1.countHashtag);

  return recommendations.slice(0, count).map((profile) => profile.id);
}
