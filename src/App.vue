<template>
  <v-app>
    <v-container class="d-flex justify-center">
      <v-col cols="12" md="10" lg="8">
        <!-- Page Title -->
        <v-row class="mb-6" align="center" justify="space-between">
          <!-- Logo + Title -->
          <v-col cols="12" md="6" class="d-flex align-center">
            <v-img src="/Colewan Logo.svg" alt="Logo" max-width="60" class="mr-4"></v-img>
            <div>
              <h1 class="text-h4 font-medium">Government Plantilla Positions</h1>
              <p class="text-subtitle-1 text-gray-600">
                Browse and search all available positions with salary info.
              </p>
            </div>
          </v-col>

          <!-- Search bar -->
          <v-col cols="12" md="4">
            <v-text-field v-model="search" label="Search Positions" variant="outlined" class="rounded-xl"
              prepend-inner-icon="mdi-magnify"></v-text-field>
          </v-col>
        </v-row>


        <!-- Data Table Card -->
        <v-card elevation="2" class="rounded-lg">
          <v-data-table-virtual :headers="positionHeaders" :items="paginatedPositions" height="700" hover fixed-header
            :loading="isLoading" class="elevation-0">
            <template v-slot:item.salary_amount="{ item }">
              <span class="font-medium text-success">{{ formatCurrency(item.salary_amount) }}</span>
            </template>

            <template v-slot:no-data>
              <v-row class="pa-6" justify="center">
                <v-col cols="12" class="text-center text-gray-500">
                  No positions found matching your search.
                </v-col>
              </v-row>
            </template>
          </v-data-table-virtual>
        </v-card>

        <!-- Pagination -->
        <v-row class="mt-6" justify="center">
          <v-col cols="auto">
            <v-pagination v-model="currentPage" :length="totalPages" color="primary" rounded
              prev-icon="mdi-chevron-left" next-icon="mdi-chevron-right" />
          </v-col>
        </v-row>
      </v-col>
    </v-container>
    <!-- Footer -->
    <v-footer class="mt-12 py-6" elevation="0" padless>
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="12" class="text-center text-gray-500">
            © {{ new Date().getFullYear() }} Christian Colewan. All rights reserved.
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>

</template>

<style scoped>
.text-gray-500 {
  color: #6b7280;
  /* Tailwind gray-500 equivalent for subtle text */
}

.text-gray-600 {
  color: #4b5563;
  /* Slightly darker for subtitle */
}

.text-success {
  color: #10b981;
  /* Green for salary highlights */
}
</style>


<script>
import axios from "axios";
import { salaryMatrix } from "@/assets/salary_matrix";

export default {
  data() {
    return {
      isLoading: false,
      positions: [],
      search: "",
      currentPage: 1,
      perPage: 50,

      positionHeaders: [
        { title: "ID", value: "id", sortable: true },
        { title: "Government Plantilla Items", value: "position_name", sortable: true },
        { title: "Salary Grade", value: "salary_grade", sortable: true },
        { title: "Salary Amount", value: "salary_amount", sortable: false },
      ],
    };
  },

  created() {
    this.loadData();
  },

  methods: {
    getSalaryByGradeStep(grade, step = 1) {
      return salaryMatrix[grade]?.[step - 1] || null;
    },

    async loadData() {
      this.isLoading = true;
      try {
        const response = await axios.get("/lib_positions.json");
        this.positions = response.data.map((pos) => ({
          ...pos,
          salary_amount: this.getSalaryByGradeStep(pos.salary_grade, pos.salary_step),
        }));
      } catch (error) {
        console.error("Error loading positions:", error);
      } finally {
        this.isLoading = false;
      }
    },

    formatCurrency(value) {
      if (!value) return "-";
      return new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
      }).format(value);
    },
  },

  computed: {
    filteredPositions() {
      if (!this.search) return this.positions;
      return this.positions.filter((pos) =>
        pos.position_name.toLowerCase().includes(this.search.toLowerCase())
      );
    },

    paginatedPositions() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = this.currentPage * this.perPage;
      return this.filteredPositions.slice(start, end);
    },

    totalPages() {
      return Math.ceil(this.filteredPositions.length / this.perPage);
    },
  },

  watch: {
    search() {
      this.currentPage = 1;
    },
  },
};

</script>
