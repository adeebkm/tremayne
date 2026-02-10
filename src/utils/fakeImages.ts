// Utility to generate AI-generated fake images for research simulation

/**
 * Generates a seed-based hash for consistent image selection
 */
const getSeedHash = (seed: string): number => {
  return seed.split('').reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
};

/**
 * Get an AI-generated face image URL using DiceBear API
 * This generates consistent, realistic-looking faces based on a seed
 */
export const getAIGeneratedFace = (seed: string, size: number = 200): string => {
  // Use DiceBear Personas API for AI-generated faces
  // The seed ensures the same person is generated for the same seed
  const normalizedSeed = seed.replace(/[^a-zA-Z0-9]/g, '') || 'default';
  return `https://api.dicebear.com/7.x/personas/png?seed=${normalizedSeed}&size=${size}`;
};

/**
 * Get an AI-generated banner/background image
 */
export const getAIGeneratedBanner = (seed: string, width: number = 1200, height: number = 300): string => {
  // Use a different style for banners - use abstract patterns
  const normalizedSeed = seed.replace(/[^a-zA-Z0-9]/g, '') || 'default';
  return `https://api.dicebear.com/7.x/shapes/png?seed=${normalizedSeed}&size=${width}&backgroundColor=0077b5`;
};

/**
 * Get a fake image URL for a result - now using AI-generated faces
 */
export const getFakeImageUrl = (resultId: string, type: 'avatar' | 'thumbnail' | 'header' = 'avatar'): string => {
  const dimensions = {
    avatar: 200,      // Profile pictures - larger for better quality
    thumbnail: 150,  // Thumbnails
    header: 1200     // Banner/header images
  };
  
  const size = dimensions[type];
  
  // Use specific image for Akhilesh Kotegar as requested
  if (resultId.toLowerCase() === 'akhilesh' && (type === 'avatar' || type === 'thumbnail')) {
    return 'https://media.licdn.com/dms/image/v2/C4D03AQFgiUNxZzODeg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1661234870909?e=1771459200&v=beta&t=0a9tUlxh-uDfEhPsV0rMCUx37l1bTukNk0E5HZMaXFI';
  }

  // Use specific image for Ayush Daga as requested
  if (resultId.toLowerCase() === 'ayush' && (type === 'avatar' || type === 'thumbnail')) {
    return 'https://media.licdn.com/dms/image/v2/D5635AQFPnMUNW0T8Fg/profile-framedphoto-shrink_800_800/B56ZnLKuZlKMAg-/0/1760050210667?e=1770764400&v=beta&t=9WxdxjAnLYBGMS9feRHeccWfyvVJUZmBv7A8c662xnk';
  }

  // Use specific image for Adeeb as requested
  if (resultId.toLowerCase().includes('adeeb') && (type === 'avatar' || type === 'thumbnail')) {
    return 'https://media.licdn.com/dms/image/v2/C5603AQH4Q23H_95Dqg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1610555050464?e=2147483647&v=beta&t=vtqWB22HLJsxpwC8ldRKBnxoaYH3StgycW0YAv6ZeLA';
  }
  
  if (type === 'header') {
    return getAIGeneratedBanner(resultId, size, 300);
  }
  
  return getAIGeneratedFace(resultId, size);
};

/**
 * Get a fake video thumbnail URL - using AI-generated images
 */
export const getFakeVideoThumbnail = (videoId: string): string => {
  return getAIGeneratedBanner(videoId, 400, 225);
};

/**
 * Get photos from Photos folder based on race and gender
 */
export const getPersonaPhotos = (race: 'White American' | 'African American', gender: 'Male' | 'Female'): string[] => {
  const raceFolder = race === 'White American' ? 'Race - White' : 'Race - Black';
  const genderFolder = gender === 'Male' ? 'Male' : 'Female';
  const basePath = `/Photos/${raceFolder} - ${genderFolder}`;
  
  // Select 5 photos based on race and gender
  if (race === 'African American' && gender === 'Male') {
    return [
      `${basePath}/4fd6816a-d38e-4748-9f63-f5c712f073ae.jpg`,
      `${basePath}/580eadd0-f656-498d-b3c1-eb8d3628e7f5.jpg`,
      `${basePath}/797e87d8-3642-4dc9-94a6-4f2ba56ce7a8.jpg`,
      `${basePath}/90bd288c-9c18-45ea-90b1-6e72129e440e.jpg`,
      `${basePath}/980f74ff-5e0f-4f7d-a044-3433547ed748.jpg`
    ];
  }
  
  return [];
};


