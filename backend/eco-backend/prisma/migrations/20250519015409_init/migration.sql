-- CreateTable
CREATE TABLE "MsUser" (
    "user_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_password" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_phone" TEXT NOT NULL,
    "user_profile_picture" TEXT NOT NULL,

    CONSTRAINT "MsUser_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "MsVehicle" (
    "vehicle_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "vehicle_name" TEXT NOT NULL,
    "vehicle_number" TEXT NOT NULL,

    CONSTRAINT "MsVehicle_pkey" PRIMARY KEY ("vehicle_id")
);

-- CreateTable
CREATE TABLE "TripTransaction" (
    "trip_id" TEXT NOT NULL,
    "customer_id" TEXT NOT NULL,
    "driver_id" TEXT NOT NULL,
    "destination_id" TEXT NOT NULL,
    "trip_date" TIMESTAMP(3) NOT NULL,
    "trip_point" INTEGER NOT NULL,

    CONSTRAINT "TripTransaction_pkey" PRIMARY KEY ("trip_id")
);

-- CreateTable
CREATE TABLE "MsDestination" (
    "destination_id" TEXT NOT NULL,
    "destination_name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "MsDestination_pkey" PRIMARY KEY ("destination_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MsUser_user_email_key" ON "MsUser"("user_email");

-- AddForeignKey
ALTER TABLE "MsVehicle" ADD CONSTRAINT "MsVehicle_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "MsUser"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripTransaction" ADD CONSTRAINT "TripTransaction_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "MsUser"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripTransaction" ADD CONSTRAINT "TripTransaction_driver_id_fkey" FOREIGN KEY ("driver_id") REFERENCES "MsUser"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripTransaction" ADD CONSTRAINT "TripTransaction_destination_id_fkey" FOREIGN KEY ("destination_id") REFERENCES "MsDestination"("destination_id") ON DELETE RESTRICT ON UPDATE CASCADE;
