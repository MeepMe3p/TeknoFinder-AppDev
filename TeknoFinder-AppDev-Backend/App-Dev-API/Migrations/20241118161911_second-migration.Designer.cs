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
    [Migration("20241118161911_second-migration")]
    partial class secondmigration
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

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

                    b.HasIndex("StudentIdentification")
                        .IsUnique();

                    b.ToTable("Users");
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
