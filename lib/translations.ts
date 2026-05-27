export type Language = 'en' | 'mn';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      projects: 'Projects',
      services: 'Services',
      contact: 'Contact',
      career: 'Career',
    },
    hero: {
      title: 'INTRODUCING WORLD STANDARDS',
      subtitle: 'Leading engineering and project management in Mongolia for over 20 years.',
      cta: 'Explore Projects',
    },
    services: {
        title: 'SERVICES AND SOLUTIONS',
        architectural: {
            title: 'Architectural Design',
            desc: 'Performs from creation of ideas and concept to architectural design'
        },
        engineering: {
            title: 'Engineering Design',
            desc: 'Delivers optimal and cost-effective technical solutions and services.'
        },
        construction: {
            title: 'Construction',
            desc: 'Employs strategic construction methodologies to deliver client objectives.'
        },
        management: {
            title: 'Construction Management',
            desc: 'Achieves success in project execution through innovative management techniques.'
        },
        project: {
            title: 'Project Management',
            desc: 'Successful project delivery from small-scale to mega-scale projects.'
        },
        consulting: {
            title: 'Consulting',
            desc: 'Offers unparalleled expertise in cost-effective, sustainable solutions.'
        }
    },
    about: {
        title: 'Crafting the Future of Mongolia',
        subtitle: 'Pioneering the Mongolian Landscape since 1999',
        detail: 'MCS Property LLC is a leading engineering and project management company in Mongolia with over 20 years of experience, having successfully implemented more than 60 projects.',
        history: {
            title: 'Our History',
            text: 'Founded in 1999, MCS Property has evolved from a small engineering group into a powerhouse of national infrastructure, setting the benchmark for quality and safety in Mongolia.'
        },
        vision: {
            title: 'Vision 2022 - 2026',
            text: 'To be the most trusted and preferred partner for complex engineering and construction projects in Central Asia, recognized for our commitment to global standards and sustainability.'
        },
        values: {
            title: 'Our Core Values',
            integrity: 'Integrity & Ethics',
            quality: 'Uncompromising Quality',
            safety: 'Safety First Culture',
            innovation: 'Continuous Innovation'
        },
        experience: 'Years of Excellence',
        projects: 'Landmark Projects',
        engineers: 'Expert Engineers',
    },
    projects: {
        title: 'Our Landmark Projects',
        featured: 'Featured Project',
        viewAll: 'View All Projects',
        shangrila: {
            name: 'Shangri-La Complex',
            desc: 'The project introduced advanced construction technologies to the national sector, including the first unitized curtain wall system.'
        }
    },
    contact: {
        title: 'Get in Touch',
        address: '12th floor Central Tower, Ulaanbaatar 14200, Mongolia',
        email: 'business@mcsp.mn',
        phone: '+976 7070 0065'
    }
  },
  mn: {
    nav: {
      home: 'Нүүр',
      about: 'Бидний тухай',
      projects: 'Төслүүд',
      services: 'Үйлчилгээ',
      contact: 'Холбоо барих',
      career: 'Кареер',
    },
    hero: {
      title: 'ДЭЛХИЙН СТАНДАРТЫГ НЭВТРҮҮЛЭГЧ',
      subtitle: 'Монгол улсын барилга, инженерийн салбарт 20 гаруй жилийн туршлагатай тэргүүлэгч.',
      cta: 'Төслүүд үзэх',
    },
    services: {
        title: 'ҮЙЛЧИЛГЭЭ БА ШИЙДВЭРҮҮД',
        architectural: {
            title: 'Архитектур төлөвлөлт',
            desc: 'Шинэлэг санаа, концепцоос эхлэн архитектурын иж бүрэн зураг төсөл'
        },
        engineering: {
            title: 'Инженерчлэл',
            desc: 'Зардал багатай, оновчтой техникийн шийдэл, үйлчилгээ'
        },
        construction: {
            title: 'Барилга угсралт',
            desc: 'Хэрэглэгчийн зорилгыг үр дүнтэй хэрэгжүүлэх стратеги арга зүй'
        },
        management: {
            title: 'Барилгын менежмент',
            desc: 'Уян хатан, шинэлэг менежментийн арга техникээр амжилттай гүйцэтгэх'
        },
        project: {
            title: 'Төслийн менежмент',
            desc: 'Жижиг хэмжээнээс авахуулаад мега төслүүдийн амжилттай нийлүүлэлт'
        },
        consulting: {
            title: 'Зөвлөх үйлчилгээ',
            desc: 'Тогтвортой, техник технологийн давуу тал бүхий шийдлүүд'
        }
    },
    about: {
        title: 'Монгол Улсын Ирээдүйг Бүтээлцэнэ',
        subtitle: '1999 оноос хойш Монгол Улсын бүтээн байгуулалтад түүчээлэгч',
        detail: 'М-Си-Эс Проперти ХХК нь барилгын салбарт 20 гаруй жилийн туршлагатай, нийтдээ 60 гаруй төслийг амжилттай хэрэгжүүлээд байгаа Монголын барилгын салбарын тэргүүлэгч компани юм.',
        history: {
            title: 'Бидний түүх',
            text: '1999 онд байгуулагдсан М-Си-Эс Проперти нь жижиг инженерийн баг хамт олноос эхлэн өнөөдөр үндэсний хэмжээний томоохон бүтээн байгуулагч, чанар, аюулгүй ажиллагааны жишиг тогтоогч болтлоо хөгжсөн.'
        },
        vision: {
            title: 'Алсын хараа 2022 - 2026',
            text: 'Дэлхийн жишигт нийцсэн чанар, аюулгүй ажиллагаа, тогтвортой хөгжлийг эрхэмлэн Төв Азийн бүс нутагт хүлээн зөвшөөрөгдсөн, хамгийн найдвартай инженеринг, төслийн менежментийн түнш байх.'
        },
        values: {
            title: 'Бидний үнэт зүйлс',
            integrity: 'Шударга байдал ба Ёс зүй',
            quality: 'Буултгүй чанар',
            safety: 'Аюулгүй ажиллагаа нэгт',
            innovation: 'Тасралтгүй инноваци'
        },
        experience: 'Жилийн шилдэг туршлага',
        projects: 'Хэрэгжүүлсэн томоохон төсөл',
        engineers: 'Мэргэжлийн инженерүүд',
    },
    projects: {
        title: 'Бидний хэрэгжүүлсэн төслүүд',
        featured: 'Онцлох төсөл',
        viewAll: 'Бүх төсөл үзэх',
        shangrila: {
            name: 'Шангри-Ла Цогцолбор',
            desc: 'Монголдоо анхдагч олон шинэлэг технологиудыг нэвтрүүлсэн томоохон цогцолбор төсөл.'
        }
    },
    contact: {
        title: 'Холбоо барих',
        address: 'Сүхбаатар дүүрэг, Централ Тауэр 12 давхар, Улаанбаатар 14200',
        email: 'business@mcsp.mn',
        phone: '+976 7070 0065'
    }
  },
};
