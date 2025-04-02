import { Plus } from "lucide-react";
import { Button } from "../../components/ui/button";
import TalentPoolTable from "../../components/talent-pool-table";
import { useEffect, useState } from "react";
import { Applicant } from "../../types";
import { applicants } from "../../sampleData";

export default function TalentPoolPage() {
    const [data, setData] = useState<Applicant[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setData(applicants.slice(0, 8))
        }, 2000);
    }, []);

    return (
        <main className="flex-1 px-8 overflow-hidden">
            <div className="flex flex-row pt-8">
                <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-1">
                            <h4 className="text-3xl text-gray-900">Talent Pool</h4>
                            <span className="flex items-center justify-center h-8 px-2.5 bg-gray-100 rounded-2xl">{data.length}</span>
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

            <hr className="my-6" />

            <div className="mt-6 overflow-y-auto">
                <TalentPoolTable data={data} />
            </div>
        </main>
    )
}