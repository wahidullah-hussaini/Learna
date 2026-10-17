// Remote assets from the original eLearna template (Webflow CDN).
const A = 'https://cdn.prod.website-files.com/668cb7adec02e140422345de/'
const C = 'https://cdn.prod.website-files.com/66cbf9eecd2d43a6644e1854/'
export const asset = (f) => A + f
export const cms = (f) => C + f

export const IMG = {
  logo: asset('66c6fb8bf82fe9cef5f78d65_Elearna.svg'),
  heroGirl: asset('66c6fb8ca55c188e59cf91d8_Banner%20Girl.webp'),
  achievements: asset('66c6fb8b79cb093fa869be54_Achievements.webp'),
  trusted: asset('66f638f0e915508fda239b73_Trusted%20By%20Image.avif'),
  moon: asset('66c6fb8bdcbb90074c85249f_Half%20Moon.svg'),
  yellowDot: asset('66c6fb8b857efb6c4c737b8a_Yellow%20Dot.svg'),
  blueDot: asset('66c6fb8bfbf579e1a5ff1577_Blue%20Circle.svg'),
  rating: asset('66c6fb8b857efb6c4c737b5d_Rating.svg'),
  books: asset('66c6fb8b420a4f79326c2e96_Books.svg'),
  person: asset('66c6fb8b73655bcf79451768_Person.svg'),
  tick: asset('66cc3f52670c35637add3599_Tick.svg'),
  arrow: asset('66cd5dc1933840ec666b82c7_Slider%20Arrow.svg'),
  controls: asset('66c6fb8b23f88178b487b3e2_Controls.svg'),
  laptopGirl: asset('66c86806b094d5e2529855a0_Woman%20Using%20Laptop.webp'),
  video: asset('66c86567624ca9dec83f55cc_Home%20One%20Video-transcode.mp4'),
  freeCourses: asset('66d92b103999266e87ca5747_Free%20Course.avif'),
  man: asset('66c6fb8bbdff100351a1e011_Man%20Image%20Holding%20Graph.webp'),
  woman: asset('66c6fb8b45a3029806674bb6_Woman%20Image%20Holding%20Copy.webp'),
  clients: [
    '66c6fb8bca715a603abbc84f_Clients%20Logo.svg', '66c6fb8b87b34b4188395ff2_Clients%20Logo-4.svg',
    '66c6fb8beb3991b3db5cd5ff_Clients%20Logo-6.svg', '66c6fb8bb6896643f3baa632_Clients%20Logo-2.svg',
    '66c6fb8bf82fe9cef5f78d2a_Clients%20Logo-3.svg', '66c6fb8bf99901dda5c25e7e_Clients%20Logo-5.svg',
  ].map(asset),
  why: [
    '66c6fb8bee2a8ef26987f800_Books%20Icons.svg', '66c6fb8bdf096206b7f4e62e_Money%20Bag%20ICon.svg',
    '66c6fb8bf82fe9cef5f78d5e_Course%20Icon.svg', '66c6fb8b98a2dc7066c69460_Verified%20Icon.svg',
  ].map(asset),
}
