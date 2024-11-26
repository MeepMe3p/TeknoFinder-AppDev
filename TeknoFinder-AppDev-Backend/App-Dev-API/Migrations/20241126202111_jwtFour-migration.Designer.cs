﻿// <auto-generated />
using System;
using AppDev.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace AppDev.API.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20241126202111_jwtFour-migration")]
    partial class jwtFourmigration
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("AppDev.API.Models.Entities.Confession", b =>
                {
                    b.Property<Guid>("ConfessionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Content")
                        .IsRequired()
                        .HasMaxLength(1500)
                        .HasColumnType("nvarchar(1500)");

                    b.Property<int>("ContextType")
                        .HasColumnType("int");

                    b.Property<string>("ContextValue")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("CreatedOn")
                        .HasColumnType("datetime2");

                    b.Property<Guid>("StudentId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("ConfessionId");

                    b.HasIndex("StudentId");

                    b.ToTable("Confessions");
                });

            modelBuilder.Entity("AppDev.API.Models.Entities.Schedule", b =>
                {
                    b.Property<Guid>("ScheduleId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("Classroom")
                        .HasColumnType("int");

                    b.Property<int>("Day")
                        .HasColumnType("int");

                    b.Property<TimeOnly>("EndsAt")
                        .HasColumnType("time");

                    b.Property<string>("Section")
                        .IsRequired()
                        .HasMaxLength(2)
                        .HasColumnType("nvarchar(2)");

                    b.Property<TimeOnly>("StartsAt")
                        .HasColumnType("time");

                    b.Property<string>("SubjectTitle")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("ScheduleId");

                    b.ToTable("Schedules");
                });

            modelBuilder.Entity("AppDev.API.Models.Entities.Student", b =>
                {
                    b.Property<Guid>("StudentIdentification")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<int>("Program")
                        .HasColumnType("int");

                    b.Property<int>("Status")
                        .HasColumnType("int");

                    b.Property<int>("YearLevel")
                        .HasColumnType("int");

                    b.HasKey("StudentIdentification");

                    b.ToTable("Students");
                });

            modelBuilder.Entity("AppDev.API.Models.Entities.User", b =>
                {
                    b.Property<Guid>("UserIdentification")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("CreatedOn")
                        .HasColumnType("datetime2");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<Guid>("StudentIdentification")
                        .HasColumnType("uniqueidentifier");

                    b.HasKey("UserIdentification");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.HasIndex("StudentIdentification")
                        .IsUnique();

                    b.ToTable("Users");
                });

            modelBuilder.Entity("AppDev.API.Models.Entities.Waypoint", b =>
                {
                    b.Property<Guid>("WaypointId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("PointX")
                        .HasColumnType("int");

                    b.Property<int>("PointY")
                        .HasColumnType("int");

                    b.Property<string>("WaypointName")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.Property<string>("WaypointType")
                        .IsRequired()
                        .HasMaxLength(200)
                        .HasColumnType("nvarchar(200)");

                    b.HasKey("WaypointId");

                    b.HasIndex("WaypointName")
                        .IsUnique();

                    b.ToTable("Waypoints");
                });

            modelBuilder.Entity("AppDev.API.Models.Entities.Confession", b =>
                {
                    b.HasOne("AppDev.API.Models.Entities.Student", "Student")
                        .WithMany()
                        .HasForeignKey("StudentId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Student");
                });

            modelBuilder.Entity("AppDev.API.Models.Entities.User", b =>
                {
                    b.HasOne("AppDev.API.Models.Entities.Student", "Student")
                        .WithOne()
                        .HasForeignKey("AppDev.API.Models.Entities.User", "StudentIdentification")
                        .OnDelete(DeleteBehavior.Restrict)
                        .IsRequired();

                    b.Navigation("Student");
                });
#pragma warning restore 612, 618
        }
    }
}
