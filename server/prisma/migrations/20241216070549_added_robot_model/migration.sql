-- CreateTable
CREATE TABLE "Robot" (
    "id" TEXT NOT NULL,
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "batteryPercentage" INTEGER NOT NULL DEFAULT 0,
    "cpuUsage" INTEGER NOT NULL DEFAULT 0,
    "ramConsumption" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "location" DOUBLE PRECISION[],

    CONSTRAINT "Robot_pkey" PRIMARY KEY ("id")
);
