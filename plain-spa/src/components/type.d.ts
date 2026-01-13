/**
 * 토스페이먼츠 엔지니어링 아티클 데이터 구조
 */

export interface TossEngineeringPost {
  id: number
  key: string // e.g., "payments-legacy-8"
  title: string
  subtitle: string
  shortDescription: string
  fullDescription: string

  // 카테고리 및 분류
  category: 'Engineering' | string
  categories: Category[]

  // 상태 및 메타데이터
  isPublished: boolean
  publishedTime: string // ISO 8601
  updatedTime: string // ISO 8601
  viewCount: number

  // 미디어 설정
  coverConfig: CoverConfig
  thumbnailConfig: ThumbnailConfig

  // 작성자 (에디터)
  editor: EngineeringEditor

  // SEO 및 공유 설정
  seoConfig: EngineeringSEOConfig
  openGraph: OpenGraphConfig

  // 하단 채용/커피챗 버튼
  bottomButtonConfig: BottomCTAConfig

  // 기타 (확장용)
  quizzes: any[]
  relatedPosts: any[]
  isDisplayingFeedback: boolean
}

// 1. 카테고리 정보
interface Category {
  id: number
  name: string
  slug: string
  parentId: number | null
  iconUrl: string
}

// 2. 미디어 설정 (아티클 특성에 따른 분리)
interface CoverConfig {
  coverType: 'NONE' | 'IMAGE' | 'VIDEO'
  imageUrl: string | null
  videoUrl: string | null
  backgroundColor: string | null
  isFill: boolean
}

interface ThumbnailConfig {
  imageUrl: string
  backgroundColor: string | null
  isFill: boolean
}

// 3. 에디터 (엔지니어 프로필)
interface EngineeringEditor {
  id: number
  name: string
  slug: string
  shortDescription: string // "토스페이먼츠 Server Developer"
  description: string
  imageUrl: string
  postCount: number
}

// 4. SEO 및 키워드
interface EngineeringSEOConfig {
  post: number
  description: string
  urlSlug: string
  primaryKeyword: Keyword
  relatedKeywords: Keyword[]
}

interface Keyword {
  id: number
  content: string
  wordType: 'SEO_KEYWORD' | 'TAG'
}

// 5. 오픈그래프
interface OpenGraphConfig {
  title: string
  description: string
  imageUrl: string
  backgroundColor: string
}

// 6. 하단 버튼 (커피챗/채용 링크 전용)
interface BottomCTAConfig {
  ctaType: 'EMPHASIS_TEXT' | 'NONE' | string
  title: string
  description: string
  ctaName: string
  landingUrl: string
  landingScheme: string // 토스 앱 스킴 포함
  imageUrl: string // 버튼 옆 아이콘 (커피잔 등)
}
