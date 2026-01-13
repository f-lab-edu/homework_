import { formatPublishedDate } from '~/utils'
import type { TossEngineeringPost } from './type'

const postList = () => {
  const postListPromise = fetch('assets/dummy/contents.json').then((res) =>
    res.json()
  )

  const postListContainer = document.getElementById('post-list')

  const createPostItem = (item: TossEngineeringPost) => {
    const article = document.createElement('button')
    article.className = 'post-item'
    article.onclick = () => {
      window.location.href = `/post/${item.id}`
    }
    const postText = document.createElement('div')
    postText.className = 'post-text'

    const title = document.createElement('h2')
    title.textContent = item.title || ''

    const description = document.createElement('p')
    description.textContent = item.subtitle || item.shortDescription || ''

    const meta = document.createElement('span')
    meta.className = 'post-meta'
    const publishedDate = formatPublishedDate(item.publishedTime)
    const author = item.editor && item.editor.name ? item.editor.name : ''
    meta.textContent = [publishedDate, author].filter(Boolean).join(' · ')

    postText.append(title, description, meta)

    const postThumb = document.createElement('div')
    postThumb.className = 'post-thumb'

    const imageUrl =
      (item.thumbnailConfig && item.thumbnailConfig.imageUrl) ||
      (item.coverConfig && item.coverConfig.imageUrl)

    if (imageUrl) {
      const img = document.createElement('img')
      img.src = imageUrl
      img.alt = item.title || 'thumb'
      postThumb.appendChild(img)
    }

    article.append(postText, postThumb)
    return article
  }

  if (postListContainer) {
    postListPromise.then((list) => {
      list.forEach((item) => {
        const postItem = createPostItem(item)
        postListContainer.appendChild(postItem)
      })
    })
  }
}

postList()
