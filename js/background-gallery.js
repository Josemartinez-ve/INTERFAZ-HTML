// Background Gallery Component
const galleryImages = [
  {
    alt: "Abstract colorful background",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDynLdfHtmvJCJemUuIlt08GfGV-zNyukW0aZeCnRdq2NseINpJQrxgb5hEjLgN-a9drdnKcnOsRzXnhyzVNdcF-4eEUSxO9NojQH3xxq6A-Az48nPjzhpaDCFJ9oiS4nv-PDolTH3T8X1z_Dp2zZpO5L1cuOClg08FIbHalH46i4_fYIDVZzz0obUouR1NtcJIZRJEBNG4_LAbbrE86duoEDNgnzIWf8aEhVpcXLZGnDFS0fcEdiIhPw5Y2Ehajy-H-x85ESsULI4",
  },
  {
    alt: "Person's portrait with neon lights",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7n6xC47f_M_qPuVbJK6WB5Yjq4sU97r-nPmX-I-ryFsZ2DWsmb3ut7O3RLh2PUmKVvQRhLdFVdVT7rBbcswdsUGtpJdevCWsS1SMYS27j6dxo_LREMDdNJZY5jfhTZ4RgbIANGt2f2qmGZD7qOb4J7heKgaJzh6SGISXgTzPLM7hZ0l8zOudcu1BeVRv0SgbWN3Jn8x61smURrY6ok3GRY0xbCcatgn62rNFjcbc0tP7ozGYtdeQGWCubxCzJIpULU8w9lZ--YBc",
  },
  {
    alt: "Friends having a good time at a party",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwTGwmBYOtmlO5NRELBmybKsEmH3sxfZTq1ViAHhZ1aUUgRWs1tAMdyvFSEoIVu7YAIbzoGSN0Ec-dr5vUvrcx_uta55PK90julh1n7Bqc8gj6Audddwh7l0_KgH_CT0nCLCZmuaq95DRa-i2pe3AhCxTyUrMS-cGfsv_nWrWUfoVGAvX5DQEhjeDAxSfdgB4cN6_Q7VpL0FZuwoRymrGPhHaP64fOR68JVOWD82b2tMFXEKLH8T92a7IqdpwvzZbgM8i9f7ykeE8",
  },
  {
    alt: "Couple on a beach during sunset",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYCceGtuTTjQlO6h2k0G4Ye27d7QvWNGIdYAxNsxYQReCSF7OdIisJzLw8ZRWXw4QCEMr8BXdCeC0mwf3Fb6c82ZjZtIXLojLgr92z-5ZKQpFKS8HPX6VaXJmhfJRio9QAPjOL53Ky4GuaHQUnfX8KL_CkXd-Uj7cA7Il0YcEqKVBszYt-yimYYzE0TirCzvi9vwJR1eLrZzIBFZ_755AG6WnwKBRWomBjzgF_uMv9t-YQ6WxXAbVnKsg4KIsJauGDD5xyPs2ZKsM",
  },
  {
    alt: "Portrait of a smiling woman",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1hYDPnAsfWIU1Y25ebfZWylcC42olPiFF79SbRLljUPhJlXIrREFlvvFSfDt-ihzyW0wkyepe_nK5qpFwa0FGNVfAKadeDdt_FyaiFDnHnyEsF175w6_TAADydIs2iTOYFYjdD0FVqlPfIztxSy-quGEGdAXwA2FfpeF9rgrQDE4nEbp3_xlIikNxLoV8I3sdohcMkDB85V_gtc0vU9jkdqXr-_VVaxPLu11dQ-WObktKMPkV7wJC7bzrAn8kmi5kPlgZU1YeqWg",
  },
  {
    alt: "Wedding ceremony setting",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdkbhWbduOnvJZ7kI04IEyyA19ROOW_fCdp_wSOwKVpSotd5YihZ-HyJsTsW4NHQA-kXrMkDw2VA_9YRSzmf1W0tFzO_zbIQgajfwJpmDYkIuJIRDan40VXmAhfzlWbcuCl8UTsR5OmpvvIvOgm_qm4sNvHMoC3nFEe2PTJ8-qz73jGBBzslnS2UqV5bug_T19LI6ma1aENQc5WvH1Lsg_QfD684kMtGVkR805fut7SAhyIFTKbWhkJNpK-9bWsZGMCuoF0H2Xebw",
  },
  {
    alt: "Man celebrating with confetti",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdiyxUUUt-eA9ndWONLmxrPLMArFigwzjs6xhXE65GX5SeStOzB8obAaRSompyoD5XEq5oTg9hjHLz4MYWJK9j0lGKoDuGF1MbekwgbwF-Xht3PT-GT-lMTaSzqL8tWjOfbxIN7VoWDRX3bQo0Jjlmq7BUhw1X7pT-by4NmlT1HUaPj0vErNQAWYpkX9b2o7eqcHdaPF-O3KHPmvJ9rqCzsnQVUQxZ9z4tVyRuDcVB4pTbNgy-mp6IE2AAtgqDBgvGycJIzo4YlrQ",
  },
  {
    alt: "Colorful food platter",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWcT7-6acHwXLF2gib3KwX9PobIbNp3Q5hSC4VfMffdJZJj_rNH3WFmLfFJ9PaCqm6VcnqPaMlRXbgEbZ8xkfflZ-ni0A3fq_Lf90k54sMQkm6C6xgcePO5IQHOYmvH0g3S62JtX233cy9NoIIGjI7NkAUlaB7bpUBtERPjqLg5OdRs3bqnCQS3sJxqede9wmFW8XeNVpx0MUd781oQWcUq1yb8TL_EAJJpobIwgIARCsjbFTZcMH4vCnuBO8anMJRwv3PsUznw-Y",
  },
  {
    alt: "Person holding a cat",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4JMgB496iAF66AT3jcQ8Pu4CvAtPXBa3vi-c6Ud5QaZZMBT6SzUpUSVgpImPcOCH0K87pcHwrvSts8UHGE62fgKpe16IFRUR2wdh5K2JG_0CBIBjco8C06Tkp9jd1L0ZCvhvgdeew5WLDmVw3EGXZY_Ofx8uAu8cYEU0oD-tuXyhXjmNDq2vKJxZjZs-oX6HYr4CDq13ZJyDSwiINnbx2revTmc21Dd8tcdLdxE4m5RvnkBovSf7PHpfRlxz_1dvABvjABYJkigI",
  },
  {
    alt: "Woman with striking blue eyes",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaKQKisvAmtn_PL2IZBV__jGIgl2jtXR8SsRKUbPGVGIRt1ybi-Ve1Fkewv6ujZp50tJR8l-GQcA3ZKrODugUe6S7Rgb1SEo7CnLCnRpL0S7lPWu0j_QI0XnEXAeDbYueI4oSSxrE4Mn74GnI1mg1oTI1KZOadTWlTM-1qNT-n6tCMF95_64weeErkRXtGnwZagU9kEFETD4ZG_83DwX_RSKjBoW54SmNnzxh2Xqhk2kzdgetAGhoEmup0IEKTbl5VYGUwlt5yV-c",
  },
  {
    alt: "Scenic view of a lake and mountains",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCja11IouojMlpQWLGw7m1LWsd6y-2m74GDs28kUKtSLQ191EXyi4xLrxtUa6G7HgNL_qoRKSR9wVYZNofrdq1KP1iNHqUcVv-AH4ADcVm1bonNhKkOlBh18lemJ50YtjYsvmRhciy5i8zeaEDqSKYEpla1RiK8869dw1LE1TZQlxunr14TZUatTg-9OlGvkcyL0k766HTysnvUqXjdjI_23xmZsk0Lyvu4PWogmAQQUipN-ALeQmM9jp3azsXDfmD0KfzFzRQ7Xec",
  },
  {
    alt: "Silhouette of a person against a starry night sky",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSKTJvY7cT7OHMtKvzwkNQ10D_y7hbV1y619NeKIo1rjkZ-3UW8QeOi1S5jsteBfFb0j-jXlXF3PDhe_lRdON_3fIyOKA6_BB44TI3HpKK9T2pCmFv4F2LYM-7IbiPHvHvJjo8aN87ZowB4_4rDBFrhQ-u2D_5eRzJ_jGls2VJo-CP00sA1qjvGAo_VbQjXrEhxc-31K2olyJh3yDpPLgx3F05MKKM3U8PL8SqkogbGJtEzRW98jZGz0tykKISBL9pLyRH3rvvKAU",
  },
  {
    alt: "Man exploring the outdoors",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRX2rD9YZ9DfNCJvXU5717t3pagnGdl9-D6s9CH2gMm8-EeAdhJWOJtA4qgJ7ZqclwAm0cElCSZkpJG4FWlZ49OZM-jZSJK40VAioOHybAuD4L6BHas1z-98mRDE2vtP7SPB5i0m7PC7bduUZyWYQme94erW8Wrs33PRbVI2ygICd_k1kj0Zu67df4--WoKAi0tWlO68tKPNZMGOlc8xuokDqgTzf0Gt7Lr8pzCpxCaRzF9BbR1J5-CM8I6rhc4bEZAOEbeAvsaEI",
  },
  {
    alt: "A dog in a field of flowers",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBltHXQXEm_r44FA8GLi67ij4vxYeWtMAWYNdN1C9-Z2Ad5IgyPqkSo_F4dwCc3hWfHUqZdAm9mmnsJ6il4fDVx_MuOq9y5hrKJ8LzM9pF1Ms-ell2JexffpnIzMQiMkxXGvNj132MZYLstrxnS3EuA88k2X-fkTxgNarY_7uD1HxVoa-mPpk0uSVd4E9qBTaoMoNwAETwQXO8P1PHvmtFauPmJcMRSAhV99xSTwKmAicDxdH-uXKJyqNQnIIvDkvZJtMfm8GEau-M",
  },
  {
    alt: "Hot air balloons in the sky",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBCzNsZANNLXgt_-Rg7yieHltLs9ipX3baIdPPp7ftgTibt2P5KPrEgr-u3z_YUuwm4EsBDu0vmOJrD_WHl_Fx_-385mvQia0PVz4FaYJ96quYKKhiUesQbDYhge0bxVxKDjYG56vQBUP2AyzDmWPn-rqsAwJ5c-1n_TOxKkDe3lKPZ9wp4GEXDOhuJppObbQ1RFXaxndraWj1bnYboUVaeyA2MUrm6eYYZlB6G9P8mqSVggRa9rDO6ZrKncICeNY2-0OESXQEBgLA",
  },
]

// Function to render background gallery
function renderBackgroundGallery() {
  const galleryContainer = document.getElementById("backgroundGallery")
  if (!galleryContainer) return

  const columns = [
    galleryImages.slice(0, 3),
    galleryImages.slice(3, 6),
    galleryImages.slice(6, 9),
    galleryImages.slice(9, 12),
    galleryImages.slice(12, 15),
  ]

  const gridHTML = `
    <div class="container">
      <div class="gallery-grid">
        ${columns
          .map(
            (columnImages, colIndex) => `
          <div class="gallery-column">
            ${columnImages
              .map(
                (image) => `
              <div>
                <img 
                  alt="${image.alt}" 
                  class="gallery-image" 
                  src="${image.src}"
                >
              </div>
            `,
              )
              .join("")}
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  `

  galleryContainer.innerHTML = gridHTML
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderBackgroundGallery)
} else {
  renderBackgroundGallery()
}
