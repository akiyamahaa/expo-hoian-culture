import { images } from '@/constants'
import { ECategory, IObjectTotalData, IObjectTour } from '@/types/common'

export const listMenu = [
  {
    image: images.beach,
    category: ECategory.BEACH,
    title: 'Bãi biển',
  },
  {
    image: images.hotel,
    category: ECategory.HOTEL,
    title: 'Khách sạn Homestay',
  },
  {
    image: images.food,
    category: ECategory.FOOD,
    title: 'Ẩm thực',
  },
  {
    image: images.craft,
    category: ECategory.CRAFT,
    title: 'Làng chài',
  },
  {
    image: images.cafe,
    category: ECategory.CAFE,
    title: 'Quán cà phê',
  },
  {
    image: images.place,
    category: ECategory.PLACE,
    title: 'Địa điểm',
  },
]

export const tourList = [
  {
    label: '1 ngày',
    value: '1',
  },
  {
    label: '2 ngày 1 đêm',
    value: '2',
  },
  {
    label: '3 ngày 2 đêm',
    value: '3',
  },
  {
    label: '4 ngày 3 đêm',
    value: '4',
  },
]

const placeData = {
  id: ECategory.PLACE,
  title: 'Địa điểm',
  image: images.place,
  list: [
    {
      id: 1,
      image: images.hoian,
      category: ECategory.PLACE,
      title: 'Phố cổ Hội An',
      description:
        'Phố cổ Hội An là một thành phố cổ nằm ở hạ lưu sông Thu Bồn, thuộc tỉnh Quảng Nam, Việt Nam. Đây là một trong những khu đô thị cổ nổi tiếng nhất của Đông Nam Á, được UNESCO công nhận là di sản văn hóa thế giới từ năm 1999. Hội An nổi tiếng với kiến trúc cổ kính, văn hóa đa dạng và những hoạt động truyền thống vẫn được duy trì cho đến ngày nay.',
      body: [
        {
          title: 'Lịch sử và kiến trúc',
          content:
            'Phố cổ Hội An từng là một thương cảng sầm uất từ thế kỷ 15 đến thế kỷ 19. Thương nhân từ khắp nơi trên thế giới như Nhật Bản, Trung Quốc, Hà Lan, và Pháp đã đến đây buôn bán, tạo nên sự giao thoa văn hóa độc đáo. Kiến trúc của Hội An mang đậm nét Á Đông, với những ngôi nhà cổ, đình chùa, và hội quán được xây dựng bằng gỗ và được trang trí bằng những hoa văn tinh xảo. Đặc biệt, khu phố cổ Hội An còn nổi tiếng với những con đường nhỏ lát gạch và những chiếc đèn lồng rực rỡ vào ban đêm.',
        },
        {
          title: 'Văn hóa và lễ hội',
          content: `Hội An không chỉ nổi bật với kiến trúc cổ mà còn là nơi lưu giữ nhiều giá trị văn hóa truyền thống. Một trong những nét văn hóa đặc sắc của Hội An là lễ hội thả đèn hoa đăng trên sông Thu Bồn, diễn ra vào ngày rằm hàng tháng. Đây là dịp để người dân và du khách thả những chiếc đèn lồng mang theo ước nguyện xuống dòng sông, tạo nên một cảnh tượng lung linh huyền ảo. Ngoài ra, các hoạt động nghệ thuật như múa, hát dân gian, và biểu diễn nhạc cụ truyền thống cũng được tổ chức thường xuyên tại đây.`,
        },
        {
          title: 'Ẩm thực đặc sắc',
          content: `Hội An còn nổi tiếng với nền ẩm thực phong phú và đa dạng. Du khách đến đây không thể bỏ qua những món ăn đặc sản như cao lầu, mì Quảng, bánh bao, bánh vạc và chè bắp. Các món ăn ở Hội An thường được chế biến từ những nguyên liệu tươi ngon, kết hợp với những công thức truyền thống được truyền lại qua nhiều thế hệ. Đặc biệt, khu chợ đêm Hội An là nơi lý tưởng để du khách thưởng thức ẩm thực đường phố và mua sắm các sản phẩm thủ công mỹ nghệ.`,
        },
        {
          title: 'Ý nghĩa và tầm quan trọng',
          content: `Phố cổ Hội An không chỉ là một địa điểm du lịch nổi tiếng mà còn là biểu tượng của sự giao thoa văn hóa và tinh thần bảo tồn di sản. Hội An đã giữ gìn được nét đẹp văn hóa và kiến trúc truyền thống, đồng thời phát triển du lịch bền vững, tạo ra nguồn thu nhập quan trọng cho người dân địa phương. Với vị trí đặc biệt trong lịch sử thương mại và văn hóa Việt Nam, Hội An là một di sản quý báu, không chỉ của Việt Nam mà còn của thế giới.`,
        },
      ],
    },
    {
      id: 2,
      image: images.rungduabaymau,
      category: ECategory.PLACE,
      title: 'Rừng Dừa Bảy Mẫu',
      description:
        'Rừng Dừa Bảy Mẫu nằm tại xã Cẩm Thanh, Hội An, tỉnh Quảng Nam. Đây là một khu sinh thái nổi tiếng với hệ thống rừng dừa nước độc đáo, mang đậm nét văn hóa miền sông nước và là điểm đến yêu thích của du khách muốn trải nghiệm thiên nhiên hoang sơ cùng những hoạt động dân gian thú vị.',
      body: [
        {
          title: 'Lịch sử và vị trí',
          content:
            'Rừng Dừa Bảy Mẫu có lịch sử từ thời kỳ kháng chiến chống Pháp và Mỹ, khi nơi đây từng là căn cứ địa bí mật của lực lượng cách mạng. Khu rừng rộng hơn 100 hecta, được bao bọc bởi những rặng dừa nước mọc san sát hai bên bờ sông, tạo nên một khung cảnh yên bình và thơ mộng. Nơi đây cũng được gọi là “miền Tây thu nhỏ” giữa lòng Hội An bởi cảnh quan sông nước hữu tình đặc trưng của vùng đồng bằng sông Cửu Long.',
        },
        {
          title: 'Hoạt động trải nghiệm',
          content: `Du khách đến với Rừng Dừa Bảy Mẫu có thể tham gia nhiều hoạt động thú vị, trong đó nổi bật nhất là trải nghiệm đi thuyền thúng. Người dân địa phương sẽ chèo thuyền thúng đưa du khách khám phá sâu vào khu rừng dừa, nơi bạn có thể ngắm nhìn khung cảnh thiên nhiên tuyệt đẹp, lắng nghe tiếng chim hót và tận hưởng không khí trong lành. Ngoài ra, du khách còn được trải nghiệm các trò chơi dân gian trên thuyền như đua thuyền thúng, lắc thuyền thúng, và học cách làm các sản phẩm thủ công từ lá dừa như mũ, quạt, nhẫn.`,
        },
        {
          title: 'Ẩm thực miền sông nước',
          content: `Không chỉ nổi tiếng với cảnh quan, Rừng Dừa Bảy Mẫu còn thu hút du khách bởi ẩm thực miền sông nước đa dạng. Các món ăn từ tôm, cua, cá được đánh bắt trực tiếp tại khu vực, kết hợp với những gia vị đặc trưng của miền Trung Việt Nam, mang đến hương vị đậm đà khó quên. Một số món nổi bật mà du khách không thể bỏ qua bao gồm gỏi dừa, tôm nướng muối ớt, và cá bống kho tộ.`,
        },
        {
          title: 'Ý nghĩa và bảo tồn',
          content: `Rừng Dừa Bảy Mẫu không chỉ là một điểm du lịch sinh thái hấp dẫn mà còn có ý nghĩa lịch sử và văn hóa sâu sắc. Việc bảo tồn và phát triển khu rừng là một phần quan trọng trong việc duy trì hệ sinh thái ven biển, đồng thời giúp phát triển kinh tế cho người dân địa phương thông qua du lịch bền vững. Nơi đây còn mang giá trị về mặt giáo dục, là bài học thực tiễn về môi trường và sinh thái cho du khách, đặc biệt là thế hệ trẻ.`,
        },
      ],
    },
  ],
}
const hotelData = {
  id: ECategory.HOTEL,
  title: 'Khách sạn Homestay',
  image: images.hotel,
  list: [],
}
const cafeData = {
  id: ECategory.CAFE,
  title: 'Quán cà phê',
  image: images.cafe,
  list: [
    {
      id: 4,
      image: images.cafe1,
      category: ECategory.CAFE,
      title: 'Faifo Café',
      description:
        'Faifo Café là một trong những quán cà phê nổi tiếng nhất tại Hội An, không chỉ bởi thức uống ngon mà còn nhờ view tầng thượng tuyệt đẹp với tầm nhìn bao quát toàn cảnh phố cổ. Nằm trong lòng Hội An, Faifo Café thu hút du khách nhờ không gian cổ kính và tinh tế, hòa quyện với nét đẹp văn hóa truyền thống của phố Hội.',
      body: [
        {
          title: 'Lịch sử và vị trí',
          content:
            'Faifo Café nằm ở trung tâm khu phố cổ Hội An, một địa điểm lý tưởng cho những ai muốn khám phá vẻ đẹp yên bình của thành phố này. Tên “Faifo” xuất phát từ tên gọi cũ của Hội An trong thời kỳ giao thương quốc tế. Quán cà phê đã trở thành một điểm đến quen thuộc cho cả du khách trong và ngoài nước, nơi mà họ có thể dừng chân, thưởng thức đồ uống và chiêm ngưỡng khung cảnh tuyệt đẹp của phố cổ.',
        },
        {
          title: 'Không gian quán',
          content:
            'Faifo Café nổi tiếng với không gian ấm cúng và thiết kế mang đậm phong cách cổ điển. Điểm đặc biệt của quán chính là tầng thượng với tầm nhìn toàn cảnh, nơi bạn có thể nhìn thấy những mái ngói đỏ xô nghiêng và những con đường nhỏ hẹp của phố Hội. Buổi sáng sớm hoặc lúc hoàng hôn là những thời điểm tuyệt vời để lên tầng thượng và tận hưởng không khí trong lành, yên bình của Hội An.',
        },
        {
          title: 'Thức uống và ẩm thực',
          content: `Faifo Café phục vụ nhiều loại thức uống như cà phê truyền thống, cà phê pha máy, sinh tố, và trà. Đặc biệt, cà phê Việt Nam tại đây được nhiều khách hàng đánh giá cao nhờ hương vị đậm đà và cách pha chế độc đáo. Ngoài ra, quán còn có các món bánh ngọt và đồ ăn nhẹ, phù hợp cho những buổi hẹn hò hoặc những giờ phút thư giãn bên tách cà phê.`,
        },
        {
          title: 'Điểm đến lý tưởng cho du khách',
          content: `Faifo Café không chỉ là nơi dừng chân để thưởng thức đồ uống, mà còn là địa điểm check-in yêu thích của nhiều du khách. Với không gian đẹp và view ấn tượng, quán là nơi lý tưởng để chụp những bức ảnh kỷ niệm. Đến với Faifo Café, bạn không chỉ thưởng thức cà phê mà còn đắm chìm trong nét đẹp hoài cổ và văn hóa đặc trưng của Hội An.`,
        },
      ],
    },
  ],
}
const beachData = {
  id: ECategory.BEACH,
  title: 'Bãi biển',
  image: images.beach,
  list: [],
}
const craftData = {
  id: ECategory.CRAFT,
  title: 'Khách sạn Homestay',
  image: images.craft,
  list: [
    {
      id: 5,
      image: images.langnghehoian1,
      category: ECategory.CRAFT,
      title: 'Làng nghề truyền thống ở Hội An',
      description:
        'Hội An không chỉ nổi tiếng với phố cổ mà còn được biết đến với các làng nghề truyền thống lâu đời. Những làng nghề này là minh chứng cho sự phát triển của văn hóa, nghệ thuật và thủ công mỹ nghệ của địa phương. Đến với Hội An, du khách không chỉ được chiêm ngưỡng kiến trúc cổ kính mà còn có cơ hội tìm hiểu về những giá trị văn hóa truyền thống thông qua các làng nghề.',
      body: [
        {
          title: 'Làng gốm Thanh Hà',
          content:
            'Làng gốm Thanh Hà có lịch sử hơn 500 năm, nổi tiếng với các sản phẩm gốm được làm thủ công. Từ những vật dụng hàng ngày như bát đĩa, lọ hoa, đến các tác phẩm nghệ thuật gốm tinh xảo, tất cả đều được tạo ra bởi đôi bàn tay khéo léo của những nghệ nhân làng gốm. Đến đây, du khách có thể tham quan các công đoạn sản xuất và tự tay làm thử các sản phẩm gốm dưới sự hướng dẫn của nghệ nhân.',
        },
        {
          title: 'Làng mộc Kim Bồng',
          content:
            'Làng mộc Kim Bồng nổi tiếng với nghề làm mộc, từ chế tác các công trình kiến trúc, nhà cổ cho đến các sản phẩm nội thất tinh xảo. Nghệ nhân Kim Bồng đã từng đóng góp nhiều vào việc xây dựng và tu sửa các công trình ở Hội An và Huế. Đến với làng mộc Kim Bồng, du khách sẽ được chiêm ngưỡng các tác phẩm gỗ tuyệt đẹp và tìm hiểu thêm về quá trình chế tác công phu của các nghệ nhân.',
        },
        {
          title: 'Làng chiếu Bàn Thạch',
          content:
            'Làng chiếu Bàn Thạch có tuổi đời hàng trăm năm, nổi tiếng với các sản phẩm chiếu thủ công. Các sản phẩm chiếu từ làng Bàn Thạch không chỉ bền đẹp mà còn mang đậm nét truyền thống. Tại đây, du khách có thể chứng kiến quy trình đan chiếu tỉ mỉ và tìm hiểu về các loại chiếu khác nhau từ chiếu hoa, chiếu đơn giản đến các loại chiếu dệt theo yêu cầu.',
        },
        {
          title: 'Làng rau Trà Quế',
          content:
            'Làng rau Trà Quế nổi tiếng với các loại rau thơm tươi ngon, được canh tác hoàn toàn tự nhiên. Đây là nơi cung cấp rau cho các nhà hàng nổi tiếng ở Hội An và vùng lân cận. Khi đến Trà Quế, du khách không chỉ tham quan đồng rau xanh mát mà còn có cơ hội trải nghiệm công việc làm nông cùng người dân địa phương, học cách chăm sóc và trồng rau truyền thống.',
        },
        {
          title: 'Ý nghĩa văn hóa của các làng nghề',
          content:
            'Các làng nghề truyền thống tại Hội An không chỉ là nơi sản xuất hàng hóa, mà còn là không gian lưu giữ những giá trị văn hóa, nghệ thuật đặc sắc của vùng đất này. Qua nhiều thế kỷ, các làng nghề vẫn duy trì và phát triển, góp phần quan trọng trong việc bảo tồn và phát huy văn hóa địa phương. Đối với du khách, việc ghé thăm các làng nghề không chỉ mang lại kiến thức thú vị mà còn là cơ hội để hiểu rõ hơn về lịch sử và con người Hội An.',
        },
      ],
    },
  ],
}
const foodData = {
  id: ECategory.FOOD,
  title: 'Ẩm thực',
  image: images.food,
  list: [
    {
      id: 3,
      image: images.banhmiphuong,
      category: ECategory.FOOD,
      title: 'Bánh Mì Phượng',
      description:
        'Bánh Mì Phượng là một trong những món ăn nổi tiếng của Hội An, từng được vinh danh bởi nhiều đầu bếp nổi tiếng trên thế giới. Đây là thương hiệu bánh mì đã tồn tại nhiều năm, thu hút không chỉ người dân địa phương mà còn cả du khách trong và ngoài nước nhờ hương vị đặc trưng và cách chế biến độc đáo.',
      body: [
        {
          title: 'Lịch sử hình thành',
          content:
            'Bánh Mì Phượng ra đời từ những năm 1980 tại phố cổ Hội An. Ban đầu, quán bánh mì chỉ là một tiệm nhỏ bán cho người dân địa phương. Nhờ hương vị thơm ngon và cách phục vụ tận tình, quán dần trở nên nổi tiếng và trở thành một trong những địa điểm không thể bỏ qua khi đến Hội An. Nhiều du khách quốc tế, trong đó có đầu bếp nổi tiếng Anthony Bourdain, đã khen ngợi và giới thiệu Bánh Mì Phượng trên nhiều kênh truyền hình quốc tế.',
        },
        {
          title: 'Thành phần và cách chế biến',
          content: `Bánh Mì Phượng nổi tiếng nhờ sự kết hợp hoàn hảo giữa vỏ bánh giòn rụm và nhân bánh đa dạng, phong phú. Bánh mì được làm từ bột mì tươi ngon, vỏ ngoài vàng óng và giòn tan. Nhân bánh bao gồm nhiều loại thịt nguội, pate, chả lụa, và các loại rau thơm như dưa leo, rau mùi. Điểm nhấn đặc biệt chính là nước sốt tự chế biến của quán, tạo nên hương vị độc đáo không lẫn với bất kỳ nơi nào.`,
        },
        {
          title: 'Sự yêu thích của du khách',
          content: `Bánh Mì Phượng đã trở thành một biểu tượng ẩm thực của Hội An, thu hút hàng ngàn du khách mỗi năm. Hàng dài người xếp hàng chờ mua bánh là hình ảnh quen thuộc tại quán. Nhiều người cho rằng, Bánh Mì Phượng chính là một trong những phiên bản bánh mì ngon nhất họ từng thưởng thức, không chỉ bởi hương vị mà còn bởi sự thân thiện của người chủ quán và không khí đậm chất Hội An.`,
        },
        {
          title: 'Ý nghĩa và phát triển',
          content: `Bánh Mì Phượng không chỉ là một món ăn, mà còn là niềm tự hào của ẩm thực Hội An. Với sự phát triển mạnh mẽ của du lịch, thương hiệu Bánh Mì Phượng đã không ngừng lớn mạnh, góp phần quảng bá ẩm thực Việt Nam ra thế giới. Sự kết hợp giữa truyền thống và sáng tạo trong từng chiếc bánh mì đã tạo nên một món ăn bình dị nhưng mang giá trị văn hóa cao.`,
        },
      ],
    },
  ],
}

export const totalData: IObjectTotalData = {
  [ECategory.PLACE]: placeData,
  [ECategory.BEACH]: beachData,
  [ECategory.FOOD]: foodData,
  [ECategory.CRAFT]: craftData,
  [ECategory.CAFE]: cafeData,
  [ECategory.HOTEL]: hotelData,
}

export const allPosts = [...placeData.list, ...foodData.list, ...craftData.list]

export const tourSuggest: IObjectTour = {
  '1': [
    {
      day: 1,
      title: 'Buổi sáng',
      description: 'Ăn sáng – Cafe – dạo qua các hội quán',
      posts: [foodData.list[0], cafeData.list[0]],
    },
    {
      day: 1,
      title: 'Buổi chiều',
      description: 'Ăn trưa – hóng gió biển – ăn vặt',
      posts: [foodData.list[0], cafeData.list[0]],
    },
    {
      day: 1,
      title: 'Buổi tối',
      description: 'Dạo phố – ăn tối – thả đèn hoa đăng – đi thuyền trên sông Hoài',
      posts: [foodData.list[0], cafeData.list[0]],
    },
  ],
  '2': [
    {
      day: 1,
      title: 'Buổi sáng',
      description: 'Ăn sáng – Cafe – dạo qua các hội quán',
      posts: [foodData.list[0], cafeData.list[0]],
    },
    {
      day: 1,
      title: 'Buổi chiều',
      description: 'Ăn trưa – hóng gió biển – ăn vặt',
      posts: [foodData.list[0], cafeData.list[0]],
    },
    {
      day: 1,
      title: 'Buổi tối',
      description: 'Dạo phố – ăn tối – thả đèn hoa đăng – đi thuyền trên sông Hoài',
      posts: [foodData.list[0], cafeData.list[0]],
    },
    {
      day: 2,
      title: 'Buổi sáng',
      description: 'Ăn sáng – Cafe – dạo qua các hội quán',
      posts: [foodData.list[0], cafeData.list[0]],
    },
    {
      day: 2,
      title: 'Buổi chiều',
      description: 'Ăn trưa – hóng gió biển – ăn vặt',
      posts: [foodData.list[0], cafeData.list[0]],
    },
    {
      day: 2,
      title: 'Buổi tối',
      description: 'Dạo phố – ăn tối – thả đèn hoa đăng – đi thuyền trên sông Hoài',
      posts: [foodData.list[0], cafeData.list[0]],
    },
  ],
}
