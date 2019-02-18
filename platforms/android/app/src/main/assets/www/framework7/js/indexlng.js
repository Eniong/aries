function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var Post =
function Post(keyword, page, loc, logo) {_classCallCheck(this, Post);
  this.keyword = keyword;
  this.page = page;
  this.loc = loc;
  this.logo = logo;
};


var app = new Vue({
  el: '#app',
  data: {
    search: '',
    postList: [
    new Post(
    'Pangasinan State University',
    '#',
    'Lingayen',
    'logo/PSU.png'),

    new Post(
    'University of Pangasinan, UPang, Phinma, Bachelor of Science, BS in Civil Engineering, BS in Computer Engineering, BS in Electrical Engineering, BS in Electronics Communication Engineering, BS in Medical Laboratory Science, BS in Nursing, BS in Physical Therapy, Teacher Education, Bachelor of Elementary Bachelor of Secondary Education, BS in Computer  Engineering, BS in Information Technology, Social Science, AB in Political Science, BS in Criminology, BS in Hotel and Restaurant Management, BS in Tourism, BS in Architecture, AB in Mass Communication',
    '#',
    'Dagupan City',
    'logo/UPANG.png'),

    new Post(
    'Lyceum North-Wester University',
    '#',
    'Dagupan City',
    'logo/LNU.png'),

    new Post(
    'Colegio De Dagupan',
    '#',
    'Dagupan City',
    'logo/CDD.png'),

    new Post(
    'Pangasinan State University',
    '#',
    'Bayambang',
    ''),

    new Post(
    'Virgen Milagrosa University Foundation',
    '#',
    'San Carlos City',
    ''),

    new Post(
    'Pangasinan State University',
    '#',
    'Binmaley',
    ''),

    new Post(
    'Urdaneta City University',
    '#',
    'Urdaneta City',
    ''),

     new Post(
    'Pangasinan State University',
    '#',
    'Asingan',
    ''),

      new Post(
    'San Carlos College',
    '#',
    'San Carlos City',
    ''),

       new Post(
    'AMA Computer Learning Center',
    '#',
    'Alaminos',
    ''),

       new Post(
    'AMA Computer Learning Center',
    '#',
    'Dagupan City',
    ''),

       new Post(
    'Northern Luzon Adventist College',
    '#',
    'Sison',
    ''),

       new Post(
    'Divine Word College of Urdaneta ',
    '#',
    'Urdaneta City',
    ''),

       new Post(
    'Pangasinan State University',
    '#',
    'Santa Maria',
    ''),

       new Post(
    'Pangasinan State University',
    '#',
    'San Carlos City',
    ''),

       new Post(
    'WCC Aeronautical and Technological College',
    '#',
    'Binalonan',
    ''),

       new Post(
    'Pangasinan State University',
    '#',
    'Infanta',
    ''),

       new Post(
    'Pangasinan State University',
    '#',
    'Alaminos City',
    ''),

       new Post(
    'Pangasinan State University',
    '#',
    'Urdaneta City',
    ''),

       new Post(
    'Perpetual Help College og Pangasinan',
    '#',
    'Malasiqui',
    ''),

       new Post(
    'Our Lady of Manaoag College',
    '#',
    'Manaoag',
    ''),

    new Post(
    'Escuela de Nuestra Senora de La Salette',
    '#',
    'Dagupan City',
    '')] },



  computed: {
    filteredList: function filteredList() {var _this = this;
      return this.postList.filter(function (post) {
        return post.keyword.toLowerCase().includes(_this.search.toLowerCase()) || post.loc.toLowerCase().includes(_this.search.toLowerCase());
      });
    } } });