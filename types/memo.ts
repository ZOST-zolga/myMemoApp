interface Memo {
    id: string // Unique identifier for the memo
    bodyText: string // The content of the memo
    updatedAt: Timestamp // The date when the memo was last updated
}
import { type Timestamp } from 'firebase/firestore';

export type { Memo }
