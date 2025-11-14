export const mockFruits = [
  {
    id: 'mulberry',
    name: 'Mulberry',
    image: '/mulberry-fruit-on-tree.jpg',
    season: 'May - July',
    description: 'Sweet and nutritious mulberries rich in antioxidants and vitamins.',
    region: 'Upper Kohat',
    nutritionInfo: 'Rich in vitamin C, fiber, and antioxidants',
    diseases: 'Leaf spot, powdery mildew',
    climateInfo: 'Prefers temperate climate with moderate rainfall'
  },
  {
    id: 'pomegranate',
    name: 'Pomegranate',
    image: '/fresh-pomegranate-fruit.jpg',
    season: 'August - October',
    description: 'Juicy pomegranates with exceptional health benefits and vibrant flavor.',
    region: 'Central Kohat',
    nutritionInfo: 'High in antioxidants, vitamin C, and polyphenols',
    diseases: 'Bark canker, fruit rot',
    climateInfo: 'Thrives in warm, dry conditions with well-drained soil'
  },
  {
    id: 'almond',
    name: 'Almond',
    image: '/almond-nuts-on-tree.jpg',
    season: 'August - September',
    description: 'Premium almonds known for their superior quality and nutritional value.',
    region: 'Lower Kohat',
    nutritionInfo: 'Excellent source of protein, vitamin E, and healthy fats',
    diseases: 'Hull rot, shot hole',
    climateInfo: 'Requires cold winters and hot, dry summers'
  },
  {
    id: 'apricot',
    name: 'Apricot',
    image: '/ripe-apricot-fruit.jpg',
    season: 'May - June',
    description: 'Golden apricots bursting with natural sweetness and carotene.',
    region: 'Highland Kohat',
    nutritionInfo: 'Rich in beta-carotene, fiber, and potassium',
    diseases: 'Brown rot, bacterial canker',
    climateInfo: 'Tolerates diverse climate conditions with good drainage'
  },
  {
    id: 'walnut',
    name: 'Walnut',
    image: '/walnut-nuts-and-shells.jpg',
    season: 'September - October',
    description: 'Nutrient-dense walnuts perfect for healthy eating and cooking.',
    region: 'Forest Areas',
    nutritionInfo: 'High in omega-3 fatty acids, fiber, and antioxidants',
    diseases: 'Walnut blight, leaf blotch',
    climateInfo: 'Grows well in cooler climates with adequate moisture'
  },
  {
    id: 'cherry',
    name: 'Cherry',
    image: '/red-cherry-fruits-on-branch.jpg',
    season: 'June - July',
    description: 'Delicate cherries with bright color and delightful sweet taste.',
    region: 'Upper Valleys',
    nutritionInfo: 'Contains melatonin, vitamin C, and anti-inflammatory compounds',
    diseases: 'Brown rot, cherry leaf spot',
    climateInfo: 'Prefers cool climate with well-drained soil'
  }
];

export const mockCommunityPosts = [
  {
    id: 1,
    author: 'Farmer Ahmed',
    avatar: '/farmer-avatar.png',
    title: 'Best Practices for Mulberry Cultivation',
    content: 'After 20 years of farming, I\'ve learned that proper pruning and irrigation timing are key to maximum yield.',
    image: '/mulberry-farm.jpg',
    timestamp: '2 days ago',
    likes: 45,
    comments: 8,
    tags: ['Mulberry', 'Cultivation', 'Tips']
  },
  {
    id: 2,
    author: 'Orchard Owner Fatima',
    avatar: '/woman-farmer-avatar.jpg',
    title: 'Disease Management: Early Detection Saves Crops',
    content: 'I recently dealt with a fungal infection in my pomegranate orchard. Early identification made all the difference.',
    image: '/pomegranate-orchard.jpg',
    timestamp: '5 days ago',
    likes: 62,
    comments: 12,
    tags: ['Disease', 'Prevention', 'Pomegranate']
  },
  {
    id: 3,
    author: 'Young Farmer Hassan',
    avatar: '/young-farmer-avatar.jpg',
    title: 'Climate Impact on Almond Production',
    content: 'Noticed significant changes in almond flowering patterns this season. Climate adaptation strategies needed.',
    image: '/almond-farm-landscape.jpg',
    timestamp: '1 week ago',
    likes: 38,
    comments: 15,
    tags: ['Climate', 'Almond', 'Research']
  }
];

export const mockAdminData = {
  totalReports: 28,
  pendingReview: 7,
  approvedPosts: 156,
  totalUsers: 342,
  recentReports: [
    { id: 1, title: 'Pest infestation in Central district', status: 'pending', date: '2 hours ago' },
    { id: 2, title: 'Walnut tree disease identification', status: 'reviewing', date: '6 hours ago' },
    { id: 3, title: 'Water shortage affecting harvest', status: 'approved', date: '1 day ago' }
  ]
};
