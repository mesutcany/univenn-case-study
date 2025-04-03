import { Plus } from "lucide-react";
import { Button } from "../../components/ui/button";
import TalentPoolTable from "../../components/talent-pool-table";
import { useData } from "../../components/data-provider";

export default function TalentPoolPage() {
  const { data, previousData } = useData();

  return (
    <main className="flex-1 px-8 overflow-hidden flex flex-col gap-6 h-screen">
      <div className="flex flex-row pt-8">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <h4 className="text-3xl text-gray-900">Talent Pool</h4>
              <span className="flex items-center justify-center h-8 px-2.5 bg-gray-100 rounded-2xl">{(data || previousData)?.getCompanyApplicantList?.total ?? 0}</span>
            </div>

            <p className="text-gray-500">Keep track of the applicants</p>
          </div>

          <div>
            <Button className="h-10 px-4! bg-gray-900">
              <Plus />
              <span>Add Talent</span>
            </Button>
          </div>
        </div>
      </div>

      <hr />

      <TalentPoolTable data={(data || previousData)?.getCompanyApplicantList?.applicants ?? []} />
    </main>
  )
}