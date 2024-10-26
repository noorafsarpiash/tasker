export default function AddTaskModal() {
  return (
    <form ClassName="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11">
      <h2 ClassName="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
        Add New Task
      </h2>

      <div ClassName="space-y-9 text-white lg:space-y-10">
        <div ClassName="space-y-2 lg:space-y-3">
          <label for="title">Title</label>
          <input
            ClassName="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
            type="text"
            name="title"
            id="title"
            required
          />
        </div>

        <div ClassName="space-y-2 lg:space-y-3">
          <label for="description">Description</label>
          <textarea
            ClassName="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
            type="text"
            name="description"
            id="description"
            required
          ></textarea>
        </div>

        <div ClassName="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
          <div ClassName="space-y-2 lg:space-y-3">
            <label for="tags">Tags</label>
            <input
              ClassName="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="tags"
              id="tags"
              required
            />
          </div>
          <div ClassName="space-y-2 lg:space-y-3">
            <label for="priority">Priority</label>
            <select
              ClassName="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
              name="priority"
              id="priority"
              required
            >
              <option value="">Select Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
      </div>

      <div ClassName="mt-16 flex justify-center lg:mt-20">
        <button
          type="submit"
          ClassName="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
        >
          Create new Task
        </button>
      </div>
    </form>
  );
}
