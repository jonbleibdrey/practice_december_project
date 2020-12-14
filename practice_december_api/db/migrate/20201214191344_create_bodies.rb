class CreateBodies < ActiveRecord::Migration[6.0]
  def change
    create_table :bodies do |t|
      t.string :head
      t.string :chest
      t.string :arm
      t.string :leg

      t.timestamps
    end
  end
end
