<template>
    <v-container class="py-8">
        <h2 class="text-h5 font-weight-bold text-center">
            Salary Matrix 2025
        </h2>
        <v-col class="text-right">
            <v-btn variant="text" class="text-decoration-underline" to="/plantilla-positions" color="primary">View
                Plantilla Positions</v-btn>
        </v-col>

        <v-table hover fixed-header height="600" class="rounded-lg flag-background">
            <thead>
                <tr>
                    <th class="text-left">Salary Grade</th>
                    <th v-for="step in 8" :key="'step-' + step" class="text-center">
                        Step {{ step }}
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="sg in Object.keys(salaryMatrix)" :key="'sg-' + sg">
                    <td class="font-weight-bold">SG {{ sg }}</td>
                    <td v-for="(amount, index) in salaryMatrix[sg]" :key="`cell-${sg}-${index}`" class="text-center">
                        {{ formatCurrency(amount) }}
                    </td>
                </tr>
            </tbody>
        </v-table>

    </v-container>
</template>

<script>
import { salaryMatrix } from "@/assets/salary_matrix";

export default {
    name: "SalaryMatrix",
    data() {
        return {
            salaryMatrix,
        };
    },
    methods: {
        formatCurrency(value) {
            return value.toLocaleString("en-PH", {
                style: "currency",
                currency: "PHP",
                minimumFractionDigits: 0,
            });
        },
    },
};
</script>

<style scoped>
.v-table th,
.v-table td {
    padding: 8px 12px;
    border-bottom: 1px solid #e0e0e0;
}

.v-table th {
    background-color: #f9f9f9;
}
</style>
