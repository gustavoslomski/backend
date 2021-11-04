-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_feedbacks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" TEXT NOT NULL,
    "improvement" TEXT NOT NULL,
    "maintain" TEXT NOT NULL,
    "suggestion" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "target_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    "creator_id" TEXT NOT NULL,
    CONSTRAINT "feedbacks_target_id_fkey" FOREIGN KEY ("target_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "feedbacks_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "feedbacks_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_feedbacks" ("author_id", "created_at", "creator_id", "date", "id", "improvement", "maintain", "message", "suggestion", "target_id") SELECT "author_id", "created_at", "creator_id", "date", "id", "improvement", "maintain", "message", "suggestion", "target_id" FROM "feedbacks";
DROP TABLE "feedbacks";
ALTER TABLE "new_feedbacks" RENAME TO "feedbacks";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
