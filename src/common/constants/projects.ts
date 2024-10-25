export const projectsEn = [
  {
    codeUrl: 'https://github.com/proffery/my-blog',
    coverUrl: '/images/projects/blog.png',
    demoUrl: 'https://streetphoto.world/',
    description:
      'Street Blog Platform is a dynamic platform built with Next.js and Appwrite, designed to showcase urban ' +
      'photography. Leveraging internationalization (i18n), users can explore captivating street visuals from ' +
      'around the globe in their preferred language. With an intuitive form handling system and a rich text ' +
      'editor (Tiptap), we provide a seamless and user-friendly experience for photographers, enabling them to add ' +
      'context and stories to their images.',
    techIds: ['typeScript', 'next', 'redux', 'storyBook', 'sass'],
    title: 'Blog Platform',
  },
  {
    codeUrl: 'https://github.com/proffery/my-blog',
    coverUrl: '/images/projects/blog.png',
    demoUrl: 'https://streetphoto.world/',
    description: 'Next',
    techIds: ['storyBook', 'sass'],
    title: 'Next.js Blog Platform',
  },
]

export const projectsRu: Project[] = [
  {
    codeUrl: 'https://github.com/proffery/my-blog',
    coverUrl: '/images/projects/blog.png',
    demoUrl: 'https://streetphoto.world/',
    description:
      'Street PhotoBlog — это динамичная платформа, созданная с использованием Next.js и Appwrite, ' +
      'предназначенная для демонстрации уличной фотографии. Используя возможности интернационализации (i18n),' +
      ' пользователи могут исследовать захватывающие визуальные образы с улиц со всего мира на своем родном языке.' +
      ' С интуитивной системой обработки форм и текстовым редактором Tiptap мы обеспечиваем плавный и удобный опыт для ' +
      'фотографов, позволяя им добавлять контекст и истории к своим изображениям.',
    techIds: ['typeScript', 'next', 'redux', 'storyBook', 'sass'],
    title: 'Блог-платформа',
  },
  {
    codeUrl: 'https://github.com/proffery/my-blog',
    coverUrl: '/images/projects/blog.png',
    demoUrl: 'https://streetphoto.world/',
    description: 'Next',
    techIds: ['storyBook', 'sass'],
    title: 'Next.js Blog Platform',
  },
]

export type Project = (typeof projectsEn)[0]
