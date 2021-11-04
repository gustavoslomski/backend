/*
  Warnings:

  - You are about to drop the `messages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `user_id` on the `feedbacks` table. All the data in the column will be lost.
  - Added the required column `suggestion` to the `feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `target_id` to the `feedbacks` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "messages";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_feedbacks" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "improvement" TEXT NOT NULL,
    "maintain" TEXT NOT NULL,
    "suggestion" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "target_id" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    CONSTRAINT "feedbacks_target_id_fkey" FOREIGN KEY ("target_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "feedbacks_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_feedbacks" ("author_id", "created_at", "date", "id", "improvement", "maintain", "message") SELECT "author_id", "created_at", "date", "id", "improvement", "maintain", "message" FROM "feedbacks";
DROP TABLE "feedbacks";
ALTER TABLE "new_feedbacks" RENAME TO "feedbacks";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
