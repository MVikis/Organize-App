﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Organize.Models;

namespace Organize.Migrations
{
    [DbContext(typeof(ContainerDbContext))]
    partial class ContainerDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("Organize.Models.Container", b =>
                {
                    b.Property<int>("ContainerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("ContainerName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ContainerId");

                    b.ToTable("Containers");
                });

            modelBuilder.Entity("Organize.Models.Item", b =>
                {
                    b.Property<int>("ItemId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int?>("ContainerId")
                        .HasColumnType("int");

                    b.Property<string>("ItemName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ItemId");

                    b.HasIndex("ContainerId");

                    b.ToTable("Item");
                });

            modelBuilder.Entity("Organize.Models.Item", b =>
                {
                    b.HasOne("Organize.Models.Container", null)
                        .WithMany("Items")
                        .HasForeignKey("ContainerId");
                });

            modelBuilder.Entity("Organize.Models.Container", b =>
                {
                    b.Navigation("Items");
                });
#pragma warning restore 612, 618
        }
    }
}
